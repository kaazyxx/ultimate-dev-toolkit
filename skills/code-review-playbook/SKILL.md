---
name: code-review-playbook
description: Review a diff for correctness, security, performance and maintainability with prioritized, actionable feedback. Use before merging changes or when asked to review code.
---

# Code Review Playbook

**Category:** engineering  ·  **Requires (detect first):** git

Find real defects first; style last. Every comment should be actionable.

## When to use

- Before merging a change or PR
- When asked to review code you or someone else wrote
- As the final gate after implementing a feature

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Workflow

1. Read the diff in the context of the surrounding code, not in isolation.
2. Check correctness and edge cases first, then security, then performance, then clarity.
3. Verify tests cover the change and actually exercise the new behavior.
4. Give prioritized feedback: blocking issues vs. suggestions.

## Key commands

```bash
git diff --stat
git diff main...HEAD
```

## Checklist

- Correctness/edge cases reviewed before style
- Security-sensitive paths scrutinized
- Tests present and meaningful

## Common pitfalls

- Bikeshedding formatting while missing a logic bug
- Approving code with no test for the new behavior

## Related skills

- `security-audit`
- `testing-strategy`
- `refactoring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
