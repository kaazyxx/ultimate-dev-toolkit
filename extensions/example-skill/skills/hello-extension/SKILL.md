---
name: hello-extension
description: Demonstrates the UDT extension mechanism. Use when the user asks how UDT extensions work or wants a template to copy for their own skill.
---

# Hello Extension

**Category:** example

A minimal, working skill that proves a third-party extension can add a capability
without modifying the UDT core.

## When to use

- The user asks how to build a UDT extension or skill.
- You need a copy-paste template for a new skill.

## What a skill is

A skill is a `SKILL.md` file with YAML frontmatter (`name`, `description`) and a
Markdown body of instructions. Claude loads it automatically when the
`description` matches the task; the body then guides how to do the work.

## Template to copy

```markdown
---
name: my-skill
description: One clear sentence on WHEN to use this skill (this drives auto-loading).
---

# My Skill

## When to use
- ...

## Required tools & detection
- Confirm each tool is installed before using it; never assume.

## Workflow
1. ...

## Checklist
- ...
```

## Next steps

Add `commands/<category>/<name>.md` for slash commands and `agents/<name>.md` for
subagents inside your extension folder. See `docs/extending.md`.

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output._