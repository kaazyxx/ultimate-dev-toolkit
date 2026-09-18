---
name: apl
description: "Read and write array languages (APL/J/K/BQN): array-oriented, tacit, terse operators. Use for array-language sources. Detect the interpreter (dyalog/j/ngn-k) first."
---

# Apl

**Category:** languages  ·  **Requires (detect first):** dyalog, j

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dyalog`
- `j`

## Key commands

```bash
dyalogscript script.apl
jconsole script.ijs
```

## Checklist

- Vectorized/array thinking over loops
- Operator precedence (right-to-left) understood
- Rank/shape of arrays tracked

## Common pitfalls

- Right-to-left evaluation surprises
- Unreadable one-liners without comments
- Rank/shape mismatches

## Related skills

- `data-numpy`
- `julia`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
