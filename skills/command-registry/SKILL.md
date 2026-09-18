---
name: command-registry
description: "The single source of truth for every UDT command: how they are named, discovered, documented and searched. Use to list, search or explain available commands, or when adding a new one."
---

# Command Registry

**Category:** core  ·  **Requires (detect first):** node

Commands are files under commands/<category>/<name>.md, invoked as /<category>:<name>; the registry keeps naming and help consistent.

## When to use

- When the user asks what commands exist or what a command does
- When adding, renaming or documenting a command
- To keep naming conventions consistent (/<category>:<verb>)

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`

## Workflow

1. List commands by scanning commands/ subfolders and reading their frontmatter.
2. Search by matching the query against category, name and description.
3. Explain a command by rendering its description, arguments and examples.
4. For a new command, follow /<category>:<verb> naming and add examples + argument-hint.

## Key commands

```bash
node scripts/build-catalog.mjs   # regenerate commands + docs from catalog
```

## Checklist

- Command id follows /<category>:<verb>
- Frontmatter has description and argument-hint
- At least one example is provided

## Common pitfalls

- Naming a command 'help' (collides with the built-in) — use /udt:help
- Duplicated command ids across categories

## Related skills

- `environment-detection`
- `pipelines`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
