---
name: mobile-kmp
description: "Share code across platforms with Kotlin Multiplatform: expect/actual, shared modules, platform APIs. Use for KMP projects."
---

# Mobile Kmp

**Category:** platforms  ·  **Requires (detect first):** gradle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gradle`

## Key commands

```bash
gradle build
gradle test
```

## Checklist

- Shared logic isolated from platform UI
- expect/actual used cleanly
- Concurrency model consistent

## Common pitfalls

- Leaking platform types into shared code
- Threading/coroutine mismatches across targets

## Related skills

- `kotlin`
- `mobile-android`
- `mobile-ios`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
