---
name: ada
description: "Write and build Ada/SPARK for safety-critical code: strong typing, contracts, tasking. Use for .adb/.ads files. Detect gnat first."
---

# Ada

**Category:** languages  ·  **Requires (detect first):** gnat, gprbuild

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gnat`
- `gprbuild`

## Key commands

```bash
gnatmake prog.adb
gprbuild -p
```

## Checklist

- Strong types/subtypes constrain ranges
- Contracts (pre/post) where valuable
- Tasking/protected objects correct

## Common pitfalls

- Ignoring constraint checks
- Unprotected shared data in tasks

## Related skills

- `rust`
- `c`
- `concurrency-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
