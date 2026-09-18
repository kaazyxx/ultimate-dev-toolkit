---
name: nim
description: Write and compile Nim, a statically typed language compiling to C/JS. Use for .nim files and .nimble projects. Detect nim before claiming support.
---

# Nim

**Category:** languages  ·  **Requires (detect first):** nim, nimble

Expressive, compiled Nim with strong static typing.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `nim`
- `nimble`

## Key commands

```bash
nim c -r main.nim
nimble build
nimble test
```

## Checklist

- Chosen memory management (ORC/ARC) understood
- Release vs debug flags set appropriately
- Tests run via nimble

## Common pitfalls

- Confusing compile-time vs runtime evaluation
- Mismatched GC settings across modules

## Related skills

- `c`
- `rust`
- `python`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
