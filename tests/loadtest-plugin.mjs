#!/usr/bin/env node
/**
 * Plugin load-test: mimics what Claude Code needs to load the plugin.
 * Parses the frontmatter of every generated skill/command/agent file and the
 * manifests, and fails if anything is malformed. Zero dependencies.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const problems = [];
const walk = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

function frontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  if (!text.startsWith("---")) return { error: "missing opening ---" };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { error: "missing closing ---" };
  const fm = text.slice(3, end);
  const keys = {};
  for (const line of fm.split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (m) keys[m[1]] = m[2];
  }
  return { keys, body: text.slice(end + 4).trim() };
}

// Skills
const skillFiles = walk(path.join(ROOT, "skills")).filter((f) => f.endsWith("SKILL.md"));
for (const f of skillFiles) {
  const r = frontmatter(f);
  if (r.error) problems.push(`${f}: ${r.error}`);
  else if (!r.keys.name || !r.keys.description) problems.push(`${f}: frontmatter needs name + description`);
}

// Commands
const cmdFiles = walk(path.join(ROOT, "commands")).filter((f) => f.endsWith(".md"));
for (const f of cmdFiles) {
  const r = frontmatter(f);
  if (r.error) problems.push(`${f}: ${r.error}`);
  else if (!r.keys.description) problems.push(`${f}: frontmatter needs description`);
  else if (!r.body) problems.push(`${f}: empty body`);
}

// Agents
const agentFiles = walk(path.join(ROOT, "agents")).filter((f) => f.endsWith(".md"));
for (const f of agentFiles) {
  const r = frontmatter(f);
  if (r.error) problems.push(`${f}: ${r.error}`);
  else if (!r.keys.name || !r.keys.description) problems.push(`${f}: frontmatter needs name + description`);
  else if (!r.body) problems.push(`${f}: empty body`);
}

// Manifests
for (const m of [".claude-plugin/plugin.json", ".claude-plugin/marketplace.json", "hooks/hooks.json"]) {
  try { JSON.parse(fs.readFileSync(path.join(ROOT, m), "utf8")); }
  catch (e) { problems.push(`${m}: invalid JSON (${e.message})`); }
}

console.log(`load-test: ${skillFiles.length} skills, ${cmdFiles.length} commands, ${agentFiles.length} agents, 3 manifests`);
if (problems.length) {
  console.error("LOAD-TEST FAILED:\n" + problems.slice(0, 40).map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("LOAD-TEST PASSED — every file has valid frontmatter and manifests parse.");