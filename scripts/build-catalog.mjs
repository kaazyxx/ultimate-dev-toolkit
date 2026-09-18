#!/usr/bin/env node
/**
 * UDT catalog builder.
 *
 * Reads authored catalog data from scripts/catalog/*.json and emits the plugin's
 * skills, slash commands, agents and auto-generated reference docs.
 *
 * - Zero external dependencies (Node >= 18, ESM).
 * - Idempotent: safe to re-run; it overwrites generated files only.
 * - Validates every entry (unique names, required fields) and fails loudly.
 *
 * Usage:  node scripts/build-catalog.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CATALOG = path.join(__dirname, 'catalog');

// ---------- io helpers ----------
const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const ensureDir = (d) => fs.mkdirSync(d, { recursive: true });
const write = (p, c) => { ensureDir(path.dirname(p)); fs.writeFileSync(p, c.replace(/\r\n/g, '\n'), 'utf8'); };
const globCatalog = (prefix) =>
  fs.existsSync(CATALOG)
    ? fs.readdirSync(CATALOG).filter((f) => f.startsWith(prefix) && f.endsWith('.json')).sort().map((f) => path.join(CATALOG, f))
    : [];

// ---------- formatting helpers ----------
const titleCase = (kebab) =>
  kebab.split(/[-/]/).map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');
// YAML-safe scalar for frontmatter description values.
const yamlStr = (s) => {
  const v = String(s);
  return /[:#{}\[\]&*!|>'"%@`]|^\s|\s$/.test(v) ? JSON.stringify(v) : v;
};
const bullets = (arr) => (arr || []).map((x) => `- ${x}`).join('\n');
const numbered = (arr) => (arr || []).map((x, i) => `${i + 1}. ${x}`).join('\n');

// ---------- renderers ----------
function renderSkill(s) {
  const fm = ['---', `name: ${s.name}`, `description: ${yamlStr(s.description)}`];
  if (s.allowedTools) fm.push(`allowed-tools: ${s.allowedTools}`);
  fm.push('---', '');

  const out = [...fm, `# ${s.title || titleCase(s.name)}`, ''];
  const meta = [];
  if (s.category) meta.push(`**Category:** ${s.category}`);
  if (s.tools && s.tools.length) meta.push(`**Requires (detect first):** ${s.tools.join(', ')}`);
  if (meta.length) out.push(meta.join('  ·  '), '');
  if (s.summary) out.push(s.summary, '');

  if (s.whenToUse && s.whenToUse.length) out.push('## When to use', '', bullets(s.whenToUse), '');
  if (s.tools && s.tools.length)
    out.push(
      '## Required tools & detection',
      '',
      'Before acting, confirm these are installed (see the `environment-detection` skill). ' +
        'If a tool is missing, say so and suggest how to install it — never pretend it is present.',
      '',
      bullets(s.tools.map((t) => `\`${t}\``)),
      ''
    );
  if (s.workflow && s.workflow.length) out.push('## Workflow', '', numbered(s.workflow), '');
  if (s.commands && s.commands.length)
    out.push('## Key commands', '', '```bash', ...s.commands, '```', '');
  if (s.checklist && s.checklist.length) out.push('## Checklist', '', bullets(s.checklist), '');
  if (s.pitfalls && s.pitfalls.length) out.push('## Common pitfalls', '', bullets(s.pitfalls), '');
  if (s.bodyMd) out.push(s.bodyMd.trim(), '');
  if (s.related && s.related.length)
    out.push('## Related skills', '', bullets(s.related.map((r) => `\`${r}\``)), '');

  out.push(
    '---',
    '',
    '_Safety: destructive actions require explicit confirmation; secrets are redacted before output. ' +
      'See the `safe-execution` skill._'
  );
  return out.join('\n') + '\n';
}

function renderCommand(c) {
  const fm = ['---', `description: ${yamlStr(c.description)}`];
  if (c.argumentHint) fm.push(`argument-hint: ${yamlStr(c.argumentHint)}`);
  if (c.allowedTools) fm.push(`allowed-tools: ${c.allowedTools}`);
  if (c.model) fm.push(`model: ${c.model}`);
  fm.push('---', '');
  return [...fm, c.body.trim(), ''].join('\n');
}

function renderAgent(a) {
  const fm = ['---', `name: ${a.name}`, `description: ${yamlStr(a.description)}`];
  if (a.tools) fm.push(`tools: ${a.tools}`);
  if (a.model) fm.push(`model: ${a.model}`);
  fm.push('---', '');
  return [...fm, a.body.trim(), ''].join('\n');
}

// ---------- load ----------
const skills = globCatalog('skills').flatMap(readJson);
const commands = globCatalog('commands').flatMap(readJson);
const agentsFile = path.join(CATALOG, 'agents.json');
const agents = fs.existsSync(agentsFile) ? readJson(agentsFile) : [];

// ---------- validate ----------
const errors = [];
const seenSkill = new Set();
for (const s of skills) {
  if (!s.name || !s.description) errors.push(`skill missing name/description: ${JSON.stringify(s).slice(0, 90)}`);
  else if (seenSkill.has(s.name)) errors.push(`duplicate skill name: ${s.name}`);
  else seenSkill.add(s.name);
}
const seenCmd = new Set();
for (const c of commands) {
  const id = `${c.category}:${c.name}`;
  if (!c.category || !c.name || !c.description || !c.body) errors.push(`command missing fields: ${id}`);
  else if (seenCmd.has(id)) errors.push(`duplicate command: ${id}`);
  else seenCmd.add(id);
}
const seenAgent = new Set();
for (const a of agents) {
  if (!a.name || !a.description || !a.body) errors.push(`agent missing fields: ${a.name || '?'}`);
  else if (seenAgent.has(a.name)) errors.push(`duplicate agent: ${a.name}`);
  else seenAgent.add(a.name);
}
if (errors.length) {
  console.error('Catalog validation failed:\n' + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}

// ---------- emit ----------
for (const s of skills) write(path.join(ROOT, 'skills', s.name, 'SKILL.md'), renderSkill(s));
for (const c of commands) write(path.join(ROOT, 'commands', c.category, `${c.name}.md`), renderCommand(c));
for (const a of agents) write(path.join(ROOT, 'agents', `${a.name}.md`), renderAgent(a));

// ---------- auto docs ----------
const byCat = (arr, key) =>
  arr.reduce((m, x) => ((m[x[key] || 'misc'] ||= []).push(x), m), {});

const skillDoc = ['# Skills reference', '', `> Auto-generated by \`scripts/build-catalog.mjs\`. ${skills.length} skills.`, ''];
for (const [cat, list] of Object.entries(byCat(skills, 'category')).sort()) {
  skillDoc.push(`## ${titleCase(cat)} (${list.length})`, '');
  for (const s of list.sort((a, b) => a.name.localeCompare(b.name)))
    skillDoc.push(`- **\`${s.name}\`** — ${s.description}`);
  skillDoc.push('');
}
write(path.join(ROOT, 'docs', 'skills.md'), skillDoc.join('\n') + '\n');

const cmdDoc = ['# Commands reference', '', `> Auto-generated by \`scripts/build-catalog.mjs\`. ${commands.length} commands.`, ''];
for (const [cat, list] of Object.entries(byCat(commands, 'category')).sort()) {
  cmdDoc.push(`## /${cat} (${list.length})`, '');
  for (const c of list.sort((a, b) => a.name.localeCompare(b.name)))
    cmdDoc.push(`- **\`/${cat}:${c.name}\`** ${c.argumentHint ? '`' + c.argumentHint + '`' : ''} — ${c.description}`);
  cmdDoc.push('');
}
write(path.join(ROOT, 'docs', 'commands.md'), cmdDoc.join('\n') + '\n');

const agentDoc = ['# Agents reference', '', `> Auto-generated by \`scripts/build-catalog.mjs\`. ${agents.length} agents.`, ''];
for (const a of agents.slice().sort((x, y) => x.name.localeCompare(y.name)))
  agentDoc.push(`- **\`${a.name}\`** — ${a.description}`);
write(path.join(ROOT, 'docs', 'agents.md'), agentDoc.join('\n') + '\n');

// ---------- summary ----------
let hookCount = 0;
const hooksPath = path.join(ROOT, 'hooks', 'hooks.json');
if (fs.existsSync(hooksPath)) {
  try {
    const h = readJson(hooksPath);
    hookCount = Object.values(h.hooks || {}).reduce((n, arr) => n + (Array.isArray(arr) ? arr.length : 0), 0);
  } catch { /* ignore */ }
}
let connectorCount = 0;
try {
  const pj = readJson(path.join(ROOT, '.claude-plugin', 'plugin.json'));
  connectorCount = Object.keys(pj.mcpServers || {}).length;
} catch { /* ignore */ }

const summary = {
  generatedAt: new Date().toISOString(),
  skills: skills.length,
  commands: commands.length,
  agents: agents.length,
  hooks: hookCount,
  connectors: connectorCount,
  skillCategories: Object.fromEntries(Object.entries(byCat(skills, 'category')).map(([k, v]) => [k, v.length])),
};
write(path.join(ROOT, 'catalog.summary.json'), JSON.stringify(summary, null, 2) + '\n');

console.log('UDT catalog built:');
console.log(`  skills:     ${summary.skills}`);
console.log(`  commands:   ${summary.commands}`);
console.log(`  agents:     ${summary.agents}`);
console.log(`  hooks:      ${summary.hooks}`);
console.log(`  connectors: ${summary.connectors}`);
