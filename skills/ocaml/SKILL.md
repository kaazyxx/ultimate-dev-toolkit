---
name: ocaml
description: "Write and build OCaml (Dune/opam): modules, variants, pattern matching. Use for .ml/.mli files and dune-project. Detect ocaml/dune first."
---

# Ocaml

**Category:** languages  ·  **Requires (detect first):** ocaml, dune, opam

Fast, typed functional OCaml built with Dune.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ocaml`
- `dune`
- `opam`

## Key commands

```bash
dune build
dune runtest
dune fmt
```

## Checklist

- Interfaces (.mli) constrain modules
- Matches exhaustive
- opam switch pinned

## Common pitfalls

- Ignoring incomplete-match warnings
- Mixing mutable refs with functional style carelessly

## Related skills

- `haskell`
- `fsharp`
- `rust`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
