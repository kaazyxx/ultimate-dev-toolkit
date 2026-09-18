---
name: mobile-android
description: "Build native Android apps (Kotlin/Jetpack): lifecycle, coroutines, navigation, storage. Use for Android projects. Detect gradle first."
---

# Mobile Android

**Category:** platforms  ·  **Requires (detect first):** gradle, adb

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gradle`
- `adb`

## Key commands

```bash
gradle assembleDebug
adb devices
gradle test
```

## Checklist

- Lifecycle-aware components
- Work off the main thread (coroutines)
- Permissions handled at runtime

## Common pitfalls

- Blocking the UI thread
- Leaking Context/Activity
- Ignoring configuration-change state loss

## Related skills

- `kotlin`
- `mobile-jetpack-compose`
- `security-mobile`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
