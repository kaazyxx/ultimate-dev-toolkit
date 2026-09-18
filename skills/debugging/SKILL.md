---
name: debugging
description: "Systematically diagnose a specific failure: reproduce, isolate, form and test hypotheses, and find the root cause rather than patching symptoms. Use when given an error, stack trace or misbehavior."
---

# Debugging

**Category:** engineering  ·  **Requires (detect first):** git

Root-cause first. A fix without a reproduction is a guess.

## When to use

- When there is a concrete error, stack trace, crash or wrong output
- When a test is failing and the cause is unclear
- Before applying a fix, to confirm you understand why it broke

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Workflow

1. Reproduce the failure reliably; capture exact input, environment and output.
2. Read the full error/stack; identify the first point where reality diverges from intent.
3. Form the smallest hypothesis that explains it; test it with a targeted probe or log.
4. Narrow with bisection (git bisect, binary search in code, minimal repro).
5. Fix the root cause, then re-run the reproduction to confirm and add a regression test.

## Key commands

```bash
git bisect start && git bisect bad && git bisect good <known-good-sha>
```

## Checklist

- Failure reproduced before fixing
- Root cause identified, not just the symptom
- Regression test added

## Common pitfalls

- Changing code randomly until the error disappears
- Fixing the symptom (swallowing the exception) instead of the cause

## Related skills

- `testing-strategy`
- `code-analysis`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
