---
name: elm
description: "Write Elm: pure functional frontend, the Elm architecture, no runtime exceptions. Use for .elm files. Detect the elm binary first."
---

# Elm

**Category:** languages  ·  **Requires (detect first):** elm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `elm`

## Key commands

```bash
elm make src/Main.elm
elm-test
elm-format --validate .
```

## Common pitfalls

- Fighting the type system instead of modeling data
- Overusing ports where Elm suffices

## Related skills

- `haskell`
- `web-frontend-react`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
