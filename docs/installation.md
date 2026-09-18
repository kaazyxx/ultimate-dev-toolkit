# Installation

UDT installs like any Claude Code plugin — nothing to compile.

## From a local clone

```
git clone https://github.com/your-username/ultimate-dev-toolkit
```

In Claude Code:

```
/plugin marketplace add /absolute/path/to/ultimate-dev-toolkit
/plugin install ultimate-dev-toolkit
```

## From GitHub

```
/plugin marketplace add your-username/ultimate-dev-toolkit
/plugin install ultimate-dev-toolkit
```

## Verify

```
/udt:doctor
```

This runs `scripts/detect-tools.js` (Node.js, zero dependencies) and reports
which runtimes and tools are actually installed, then which skills apply.

## Requirements

- Claude Code with plugin support.
- **Node.js 18+** — required by the doctor script, the catalog generator, and
  the advisory hooks. Everything else is optional and detected at runtime.

## Connectors (MCP servers)

The plugin declares three zero-config MCP servers in
`.claude-plugin/plugin.json` (`sequential-thinking`, `memory`, `filesystem`),
launched via `npx`. They start on first use and need no extra install beyond
Node/npx. Remove any you do not want from that file.

## Rebuilding the catalog (contributors)

```
npm run build   # regenerate skills/commands/agents + docs from scripts/catalog/
npm test        # validate the catalog
```