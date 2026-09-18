---
name: testing-strategy
description: "Choose and apply the right tests (unit, integration, e2e, property, snapshot) and detect the project's real test framework and coverage tooling. Use when adding tests or deciding what to test."
---

# Testing Strategy

**Category:** engineering  ·  **Requires (detect first):** node

Test behavior and edge cases, at the cheapest level that gives confidence.

## When to use

- When adding tests for new or changed code
- When a bug needs a regression test
- To decide unit vs integration vs e2e for a given risk

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`

## Workflow

1. Detect the test framework and runner from the project (jest/vitest/pytest/go test/cargo test/etc.).
2. Write the cheapest test that proves the behavior; add edge cases and failure paths.
3. Run the suite; verify the new test fails without the fix and passes with it.
4. Check coverage of the changed lines, not just the global number.

## Key commands

```bash
npm test --silent
pytest -q
go test ./... && cargo test
```

## Checklist

- Framework detected, not assumed
- New behavior and its edge cases covered
- Regression test fails before the fix

## Common pitfalls

- Testing implementation details instead of behavior
- Chasing a coverage percentage with meaningless tests

## Related skills

- `debugging`
- `refactoring`
- `ci-cd`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
