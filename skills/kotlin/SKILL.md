---
name: kotlin
description: "Write, build and test Kotlin (JVM/Android/Multiplatform): null-safety, coroutines, data classes. Use for .kt files and Gradle Kotlin projects."
---

# Kotlin

**Category:** languages  ·  **Requires (detect first):** kotlinc, gradle, ktlint

Null-safe, coroutine-aware Kotlin.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kotlinc`
- `gradle`
- `ktlint`

## Key commands

```bash
gradle build
ktlint
gradle test
```

## Checklist

- Nullability modeled with types, not !!
- Coroutine scopes/cancellation handled
- ktlint clean

## Common pitfalls

- !! non-null assertions hiding NPEs
- Launching coroutines in the wrong scope (leaks)
- Blocking calls on the main dispatcher

## Related skills

- `java`
- `mobile-android`
- `backend-spring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
