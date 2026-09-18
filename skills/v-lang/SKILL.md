---
name: v-lang
description: Write V, a simple compiled language with fast builds and memory safety options. Use for .v files. Detect the v binary first.
---

# V Lang

**Category:** languages  ·  **Requires (detect first):** v

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `v`

## Key commands

```bash
v run .
v -prod .
v fmt -w .
```

## Checklist

- Errors handled via option/result
- No unused variables/imports (V is strict)
- Memory management mode understood

## Common pitfalls

- Assuming a stable API (V evolves)
- Ignoring option/result error handling

## Related skills

- `go`
- `rust`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
