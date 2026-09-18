---
name: clojure
description: Write and run Clojure/ClojureScript with a REPL-driven workflow and immutable data. Use for .clj/.cljs files and deps.edn/project.clj. Detect clojure/lein first.
---

# Clojure

**Category:** languages  ·  **Requires (detect first):** clojure, clj, lein

REPL-driven, immutable, functional Lisp on the JVM.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `clojure`
- `clj`
- `lein`

## Key commands

```bash
clj -M:test
lein test
clojure -M -e "(println :ok)"
```

## Checklist

- Pure functions; side effects at the edges
- Specs/validation on external data
- REPL used to verify small pieces

## Common pitfalls

- Laziness causing side effects at unexpected times
- Overusing atoms/global mutable state

## Related skills

- `lisp-scheme`
- `scala`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
