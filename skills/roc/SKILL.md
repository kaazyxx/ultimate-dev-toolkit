---
name: roc
description: "Write Roc: fast, friendly functional language. Use for .roc files. Detect the roc binary first."
---

# Roc

**Category:** languages  ·  **Requires (detect first):** roc

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `roc`

## Key commands

```bash
roc build main.roc
roc test
roc check main.roc
```

## Common pitfalls

- Assuming a stable API (Roc is pre-1.0)
- Ignoring platform/effect boundaries

## Related skills

- `elm`
- `rust`
- `haskell`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
