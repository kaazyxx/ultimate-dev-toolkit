# Extending UDT

Adding a capability is dropping a file in a folder. The core never needs to
change. There are two ways: edit the catalog (first-party) or ship a
self-contained extension (third-party).

## A. Add to the catalog (first-party)

### A skill

Add an entry to the relevant `scripts/catalog/skills.*.json`:

```json
{
  "name": "my-skill",
  "category": "tooling",
  "description": "One clear sentence on WHEN to use this (drives auto-loading).",
  "tools": ["some-cli"],
  "commands": ["some-cli --version"],
  "checklist": ["..."],
  "pitfalls": ["..."],
  "related": ["another-skill"]
}
```

Then `npm run build`. The generator writes `skills/my-skill/SKILL.md` and
updates `docs/skills.md`.

### A command

Add to `scripts/catalog/commands.*.json`:

```json
{
  "category": "dev",
  "name": "my-command",
  "description": "What it does.",
  "argumentHint": "<arg>",
  "allowedTools": "Read, Bash",
  "body": "The prompt/instructions. Use $ARGUMENTS for input and reference skills."
}
```

Invoked as `/dev:my-command`.

### An agent

Add to `scripts/catalog/agents.json`:

```json
{
  "name": "my-reviewer",
  "description": "When to delegate to this subagent.",
  "tools": "Read, Grep, Glob, Bash",
  "model": "sonnet",
  "body": "The subagent system prompt."
}
```

## B. Ship a self-contained extension (third-party)

Put a folder under `extensions/` with its own `.claude-plugin/plugin.json` and
`skills/`, `commands/` and/or `agents/`. A working template is in
`extensions/example-skill/`. See `extensions/README.md`.

## Rules for every capability

1. **Declare `required_tools`** so availability can be detected. Never claim a
   tool is supported if it is not installed.
2. **Keep security on** — destructive actions route through confirmation
   (`safe-execution` skill); secrets are redacted.
3. **Be real and specific** — genuine commands and pitfalls beat filler. Prefer
   fewer, useful entries over padding.

## Validate

```
npm run build   # regenerate + validate
npm test        # structural checks + count thresholds
```