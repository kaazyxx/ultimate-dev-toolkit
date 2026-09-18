---
name: grain
description: "Write Grain: a functional language compiling to WebAssembly. Use for .gr files. Detect grain first."
---

# Grain

**Category:** languages  ·  **Requires (detect first):** grain

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `grain`

## Key commands

```bash
grain compile main.gr
grain run main.gr
```

## Common pitfalls

- Assuming a stable API (pre-1.0)
- WASM host-binding gaps

## Related skills

- `webassembly`
- `rust`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
