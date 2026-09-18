#!/usr/bin/env node
/**
 * Structural validation for the UDT catalog.
 *
 * Reads the authored catalog data directly and asserts:
 *   - every entry has its required fields and a unique name/id
 *   - the collection meets minimum size thresholds
 *   - hooks.json parses and has enough entries
 *   - the plugin manifest declares connectors
 *
 * Exit code 0 on success, 1 on any failure. Zero dependencies.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CATALOG = path.join(ROOT, "scripts", "catalog");

const failures = [];
const check = (cond, msg) => { if (!cond) failures.push(msg); };
const readJson = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const glob = (prefix) =>
  fs.readdirSync(CATALOG).filter((f) => f.startsWith(prefix) && f.endsWith(".json")).map((f) => path.join(CATALOG, f));

// Skills
const skills = glob("skills").flatMap(readJson);
const skillNames = new Set();
for (const s of skills) {
  check(!!s.name && !!s.description, `skill missing name/description: ${JSON.stringify(s).slice(0, 80)}`);
  check(!skillNames.has(s.name), `duplicate skill: ${s.name}`);
  skillNames.add(s.name);
}

// Commands
const commands = glob("commands").flatMap(readJson);
const cmdIds = new Set();
for (const c of commands) {
  check(!!c.category && !!c.name && !!c.description && !!c.body, `command missing fields: ${c.category}:${c.name}`);
  const id = `${c.category}:${c.name}`;
  check(!cmdIds.has(id), `duplicate command: ${id}`);
  cmdIds.add(id);
}

// Agents (agents.json plus any agents*.json)
const agents = glob("agents").flatMap(readJson);
const agentNames = new Set();
for (const a of agents) {
  check(!!a.name && !!a.description && !!a.body, `agent missing fields: ${a.name || "?"}`);
  check(!agentNames.has(a.name), `duplicate agent: ${a.name}`);
  agentNames.add(a.name);
}

// Hooks
let hookCount = 0;
const hooks = readJson(path.join(ROOT, "hooks", "hooks.json"));
for (const arr of Object.values(hooks.hooks || {})) hookCount += Array.isArray(arr) ? arr.length : 0;

// Connectors
const plugin = readJson(path.join(ROOT, ".claude-plugin", "plugin.json"));
const connectors = Object.keys(plugin.mcpServers || {}).length;

// Thresholds (must beat the reference plugin)
check(skills.length > 292, `expected > 292 skills, got ${skills.length}`);
check(commands.length > 85, `expected > 85 commands, got ${commands.length}`);
check(agents.length > 68, `expected > 68 agents, got ${agents.length}`);
check(hookCount > 24, `expected > 24 hooks, got ${hookCount}`);
check(connectors >= 3, `expected >= 3 connectors, got ${connectors}`);

console.log(`skills=${skills.length} commands=${commands.length} agents=${agents.length} hooks=${hookCount} connectors=${connectors}`);
if (failures.length) {
  console.error("VALIDATION FAILED:\n" + failures.map((f) => "  - " + f).join("\n"));
  process.exit(1);
}
console.log("VALIDATION PASSED");