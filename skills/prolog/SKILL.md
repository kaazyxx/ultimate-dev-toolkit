---
name: prolog
description: "Write logic programs in Prolog: facts, rules, unification, backtracking, cut. Use for .pl Prolog files. Detect swipl first."
---

# Prolog

**Category:** languages  ·  **Requires (detect first):** swipl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `swipl`

## Key commands

```bash
swipl -g main -t halt prog.pl
swipl -q prog.pl
```

## Checklist

- Base and recursive cases terminate
- Cut used deliberately, not to hide bugs
- Determinism understood

## Common pitfalls

- Infinite backtracking/left recursion
- Misusing cut and changing logic
- Unintended nondeterminism

## Related skills

- `lisp-scheme`
- `haskell`
- `algorithms-data-structures`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
