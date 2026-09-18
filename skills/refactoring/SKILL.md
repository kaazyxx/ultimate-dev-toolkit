---
name: refactoring
description: "Improve code structure without changing behavior: extract, rename, deduplicate, simplify and reduce complexity under the safety net of tests. Use when code is hard to read or change but works."
---

# Refactoring

**Category:** engineering  ·  **Requires (detect first):** git

Behavior-preserving change, verified green before and after.

## When to use

- When code works but is hard to read, test or extend
- Before adding a feature to a messy area (refactor first, then add)
- To remove duplication or reduce complexity

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Workflow

1. Confirm tests exist and pass (or add characterization tests first).
2. Make one small, behavior-preserving change at a time.
3. Re-run tests after each step; keep the diff reviewable.
4. Commit in small logical steps so any regression is easy to bisect.

## Checklist

- Tests green before starting and after each step
- No behavior change intended or observed
- Each commit is one coherent transformation

## Common pitfalls

- Refactoring and adding features in the same commit
- Large sweeping rewrites with no test coverage

## Related skills

- `testing-strategy`
- `code-analysis`
- `code-review-playbook`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
