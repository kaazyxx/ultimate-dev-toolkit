# Troubleshooting

## `/udt:doctor` shows a tool as "not found" but it is installed

The detector probes the tool by running its version flag. If it is not on the
`PATH` that Claude Code inherits, it will read as not found. Confirm with the
tool's own version command in the same shell, and check your `PATH`.

## A command or skill does not appear

Rebuild the catalog and reinstall/reload the plugin:

```
npm run build
```

Then reload the plugin in Claude Code. Command ids are `/<category>:<name>`
(for example `/dev:analyze`), matching `commands/<category>/<name>.md`.

## `npm run build` fails validation

The generator fails loudly on duplicate names or missing required fields. Read
the printed list, fix the offending entry in `scripts/catalog/*.json`, and run
again. Every skill needs `name` + `description`; every command needs
`category`, `name`, `description`, `body`; every agent needs `name`,
`description`, `body`.

## Node dependency issues in a project you are working on

Prefer a clean, reproducible install (`npm ci`, `pnpm install --frozen-lockfile`,
`pip install -r requirements.txt`) so the lockfile is respected. See the
`package-managers` skill.

## Hooks feel noisy or slow

The advisory hooks stay silent unless a risky pattern is detected, but each
matching tool call spawns the tiny dispatcher. Trim `hooks/hooks.json` to the
events you care about (see `configuration.md`). Hooks never block your work.

## Connectors (MCP servers) do not start

They launch via `npx` on first use and need network access the first time to
fetch the package. Ensure Node/npx work in your environment, or remove the
`mcpServers` you do not need from `.claude-plugin/plugin.json`.