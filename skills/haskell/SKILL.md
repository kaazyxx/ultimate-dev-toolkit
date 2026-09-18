---
name: haskell
description: "Write and build Haskell (Cabal/Stack): purity, types, type classes, laziness. Use for .hs files and .cabal/stack.yaml. Detect ghc/cabal/stack first."
---

# Haskell

**Category:** languages  ·  **Requires (detect first):** ghc, cabal, stack, hlint

Pure, strongly typed Haskell with effects at the edges.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ghc`
- `cabal`
- `stack`
- `hlint`

## Key commands

```bash
cabal build
stack build
hlint .
cabal test
```

## Checklist

- Effects in IO, purity elsewhere
- Total functions; partial functions avoided
- hlint suggestions considered

## Common pitfalls

- Space leaks from laziness
- Partial functions (head/fromJust) crashing
- Overengineered type-level code

## Related skills

- `ocaml`
- `fsharp`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
