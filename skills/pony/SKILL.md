---
name: pony
description: "Write Pony: actor-model, capabilities-secure, data-race-free systems language. Use for .pony files. Detect ponyc first."
---

# Pony

**Category:** languages  ·  **Requires (detect first):** ponyc

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ponyc`

## Key commands

```bash
ponyc
./program
```

## Common pitfalls

- Fighting reference capabilities
- Blocking in behaviors
- Assuming shared mutable state

## Related skills

- `concurrency-patterns`
- `rust`
- `erlang`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
