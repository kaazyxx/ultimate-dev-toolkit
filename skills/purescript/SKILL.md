---
name: purescript
description: "Write PureScript: strongly typed pure functional language compiling to JS. Use for .purs files. Detect spago/purs first."
---

# Purescript

**Category:** languages  ·  **Requires (detect first):** spago, purs

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `spago`
- `purs`

## Key commands

```bash
spago build
spago test
```

## Common pitfalls

- Type-class heavy code hurting readability
- Interop (FFI) type safety gaps

## Related skills

- `haskell`
- `elm`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
