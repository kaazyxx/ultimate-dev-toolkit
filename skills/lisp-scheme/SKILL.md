---
name: lisp-scheme
description: "Write and run Common Lisp or Scheme (Racket/Guile): macros, recursion, REPL. Use for .lisp/.scm/.rkt files. Detect sbcl/racket/guile first."
---

# Lisp Scheme

**Category:** languages  ·  **Requires (detect first):** sbcl, racket, guile

Macro-powered, REPL-driven Lisp/Scheme.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sbcl`
- `racket`
- `guile`

## Key commands

```bash
sbcl --script file.lisp
racket file.rkt
guile file.scm
```

## Checklist

- Macros hygienic and justified
- Tail recursion where growth matters
- REPL used to verify pieces

## Common pitfalls

- Unhygienic macros capturing variables
- Non-tail recursion blowing the stack

## Related skills

- `clojure`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
