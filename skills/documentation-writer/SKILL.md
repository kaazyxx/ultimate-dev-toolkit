---
name: documentation-writer
description: "Write and update accurate documentation: READMEs, API docs, docstrings, ADRs and guides derived from the real code and behavior. Use when documenting a project or change."
---

# Documentation Writer

**Category:** engineering

Docs must match the code as it is, not as it was imagined.

## When to use

- When a project lacks a README or setup/usage docs
- After a change that alters public behavior or interfaces
- To capture an architectural decision (ADR)

## Workflow

1. Read the actual code/exports/routes/config being documented.
2. Write for the reader's task: install, use, extend, troubleshoot.
3. Include runnable examples that you have reason to believe work.
4. Keep it close to the source so it stays in sync.

## Checklist

- Every command/example reflects real, current behavior
- Setup steps actually get a new user running
- No stale references to removed files/flags

## Common pitfalls

- Documenting intended behavior instead of actual behavior
- Examples that were never run and silently break

## Related skills

- `code-analysis`
- `code-generation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
