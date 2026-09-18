---
name: d-lang
description: Write and build D language code with its compilers and dub package manager. Use for .d files and dub.json/dub.sdl. Detect dmd/ldc2 before claiming support.
---

# D Lang

**Category:** languages  ·  **Requires (detect first):** dmd, ldc2, dub

Systems-capable D with modern conveniences.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dmd`
- `ldc2`
- `dub`

## Key commands

```bash
dub build
dub test
dmd -run main.d
```

## Checklist

- @safe used where possible
- GC vs manual memory tradeoffs deliberate
- Tests run via dub

## Common pitfalls

- Unexpected GC pauses in hot paths
- Mixing @safe and @system carelessly

## Related skills

- `cpp`
- `rust`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
