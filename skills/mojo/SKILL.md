---
name: mojo
description: "Write Mojo: Python-superset for high-performance/AI, with typed/SIMD constructs. Use for .mojo files. Detect the mojo binary first."
---

# Mojo

**Category:** languages  ·  **Requires (detect first):** mojo

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mojo`

## Key commands

```bash
mojo build main.mojo
mojo run main.mojo
```

## Common pitfalls

- Assuming full Python compatibility
- Ignoring memory ownership/borrow semantics
- Assuming a stable API (Mojo evolves)

## Related skills

- `python`
- `rust`
- `ml-pytorch`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
