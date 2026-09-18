# Architecture

UDT is a **Claude Code plugin**: a tree of Markdown instructions and manifests
that Claude Code loads. There is no runtime to compile. The design goal is that
hundreds of capabilities can be added without changing any core code.

## Component types

| Type | Location | What it is |
| --- | --- | --- |
| Skill | `skills/<name>/SKILL.md` | A domain playbook Claude auto-loads when its `description` matches the task. |
| Command | `commands/<category>/<name>.md` | A parameterized entry point invoked as `/<category>:<name>`. |
| Agent | `agents/<name>.md` | A focused subagent with its own context and tool set. |
| Hook | `hooks/hooks.json` + `hooks/udt-hook.mjs` | Deterministic guards that run around tool calls (advisory by default). |
| Connector | `.claude-plugin/plugin.json` (`mcpServers`) | MCP servers made available to the session. |

## The catalog generator

Skills, commands and agents are **generated from data** so the collection stays
consistent and easy to extend:

```
scripts/catalog/*.json   ->   scripts/build-catalog.mjs   ->   skills/, commands/, agents/, docs/
```

- Authoring happens in small JSON files (`scripts/catalog/`).
- `build-catalog.mjs` validates every entry (unique names, required fields),
  renders the Markdown files, and regenerates the reference docs
  (`docs/skills.md`, `docs/commands.md`, `docs/agents.md`) and
  `catalog.summary.json`.
- This is the "command registry" and "auto-documentation" in one place.

## Layers

```
Interfaces        slash commands  ·  subagents  ·  connectors
Orchestration     doctor  ·  help/registry  ·  pipelines
Knowledge         skills (core + capability + language)
Safety            safe-execution skill  ·  advisory hooks  ·  audit log
Detection         scripts/detect-tools.js (real version probes)
```

## Principles

1. **Honesty** — capabilities equal what `detect-tools.js` actually finds.
2. **Security by default** — destructive actions confirm; secrets are redacted.
3. **Modularity** — the core knows no individual skill; extensions drop in.
4. **Ergonomics** — consistent `/<category>:<verb>` naming and generated help.