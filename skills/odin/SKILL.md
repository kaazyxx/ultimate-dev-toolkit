---
name: odin
description: Write Odin, a systems language for data-oriented and game programming. Use for .odin files. Detect the odin binary first.
---

# Odin

**Category:** languages  ·  **Requires (detect first):** odin

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `odin`

## Key commands

```bash
odin run .
odin build . -o:speed
odin check .
```

## Checklist

- Explicit allocators/context used
- defer for cleanup
- Bounds/nil handled

## Common pitfalls

- Leaking due to allocator misuse
- Assuming GC (Odin is manual/context-based)

## Related skills

- `c`
- `zig`
- `gdscript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
