---
name: mobile-jetpack-compose
description: "Build Android UI with Jetpack Compose: composables, state hoisting, recomposition, performance. Use for Compose code."
---

# Mobile Jetpack Compose

**Category:** platforms  ·  **Requires (detect first):** gradle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gradle`

## Key commands

```bash
gradle assembleDebug
gradle test
```

## Checklist

- State hoisted; unidirectional data flow
- Recomposition scoped (stable params, keys)
- Side effects in effect handlers

## Common pitfalls

- Unstable params causing over-recomposition
- Side effects during composition
- Reading mutable state in the wrong scope

## Related skills

- `kotlin`
- `mobile-android`
- `make-interfaces-feel-better`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
