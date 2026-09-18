---
name: scala
description: Write and build Scala (sbt) with functional and typed patterns. Use for .scala files and build.sbt projects. Detect sbt/scala before claiming support.
---

# Scala

**Category:** languages  ·  **Requires (detect first):** scala, sbt, scalafmt

Typed, functional Scala built with sbt.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `scala`
- `sbt`
- `scalafmt`

## Key commands

```bash
sbt compile
sbt test
scalafmt --test
```

## Checklist

- Effects and errors modeled explicitly
- Implicits/givens kept discoverable
- scalafmt clean

## Common pitfalls

- Implicit resolution surprises
- Overly clever type-level code hurting readability

## Related skills

- `java`
- `haskell`
- `backend-spring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
