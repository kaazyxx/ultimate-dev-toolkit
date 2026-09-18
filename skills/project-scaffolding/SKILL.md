---
name: project-scaffolding
description: Bootstrap a new project or module with a sensible, conventional structure, config, tooling and CI for the chosen stack. Use when starting something new.
---

# Project Scaffolding

**Category:** engineering

Start with the layout, tooling and guardrails the ecosystem expects.

## When to use

- When creating a new project or service from scratch
- When adding a new package/module to a monorepo
- To set up linting, formatting, tests and CI early

## Workflow

1. Pick the stack and confirm the required tools are installed.
2. Use the ecosystem's official scaffolder where one exists (create-*, cargo new, dotnet new...).
3. Add linting, formatting, tests and a minimal CI workflow.
4. Write a README that gets a new dev running.

## Checklist

- Conventional structure for the stack
- Lint/format/test wired from day one
- README with working setup steps

## Common pitfalls

- Reinventing a bespoke layout the ecosystem does not expect
- Deferring tests/CI until the project is already messy

## Related skills

- `code-generation`
- `ci-cd`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
