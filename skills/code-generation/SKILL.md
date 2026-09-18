---
name: code-generation
description: "Generate new code that matches the project's existing conventions, patterns and dependencies rather than a generic template. Use when scaffolding modules, functions, endpoints or tests."
---

# Code Generation

**Category:** engineering

New code should read like the surrounding code — same idioms, naming and libraries.

## When to use

- When creating a new module, component, endpoint or test file
- When adding a function that must fit existing patterns
- To scaffold boilerplate consistent with the repo

## Workflow

1. Read nearby files to learn naming, structure, error handling and imports.
2. Reuse existing utilities and libraries instead of introducing new ones.
3. Generate the minimal code that satisfies the request; wire it in.
4. Add or update tests and run them.

## Checklist

- Matches existing conventions and file layout
- No unnecessary new dependency introduced
- Compiles/lints/tests pass

## Common pitfalls

- Introducing a new framework/style inconsistent with the repo
- Generating code that is never wired up or tested

## Related skills

- `code-analysis`
- `testing-strategy`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
