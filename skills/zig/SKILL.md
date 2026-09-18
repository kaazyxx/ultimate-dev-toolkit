---
name: zig
description: Write and build Zig with explicit allocators, comptime and C interop. Use for .zig files and build.zig. Detect the zig binary before claiming support.
---

# Zig

**Category:** languages  ·  **Requires (detect first):** zig

Explicit, allocator-aware systems code with no hidden control flow.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `zig`

## Key commands

```bash
zig build
zig build test
zig fmt --check .
```

## Checklist

- Allocators passed explicitly and freed
- Errors handled via error unions
- defer used for cleanup

## Common pitfalls

- Leaking because an allocator's free was skipped
- Assuming a stable std API across Zig versions

## Related skills

- `c`
- `rust`
- `cpp`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
