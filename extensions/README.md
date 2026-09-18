# UDT Extensions

Third-party, self-contained capabilities live here. The core toolkit knows
nothing about individual extensions — it discovers valid ones by convention.
This is the key extensibility promise: **add a capability without touching the
core.**

## Anatomy of an extension

```
extensions/
  my-extension/
    .claude-plugin/
      plugin.json        # manifest: name, version, description
    skills/
      <skill-name>/
        SKILL.md         # the skill (YAML frontmatter + instructions)
    commands/            # optional slash commands (category/name.md)
    agents/              # optional subagents (name.md)
```

An extension is valid when it has `.claude-plugin/plugin.json` and at least one
of `skills/`, `commands/` or `agents/`.

## Create one in three steps

1. Copy `example-skill/` to `extensions/my-extension/`.
2. Edit `.claude-plugin/plugin.json` (name, description) and the `SKILL.md`.
3. Reload the plugin in Claude Code.

See `example-skill/` for a working, minimal example, and `../docs/extending.md`
for the full guide (adding commands, agents, and required-tool detection).

> Extensions follow the same rules as the core: declare `required_tools`, never
> claim support for a tool that is not installed, and route destructive actions
> through confirmation.