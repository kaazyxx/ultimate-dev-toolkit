---
name: mobile-flutter
description: "Build cross-platform apps with Flutter/Dart: widgets, state management, navigation, platform channels. Use for Flutter projects. Detect flutter first."
---

# Mobile Flutter

**Category:** platforms  ·  **Requires (detect first):** flutter, dart

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `flutter`
- `dart`

## Key commands

```bash
flutter doctor
flutter analyze
flutter test
flutter build apk
```

## Checklist

- Widget rebuilds minimized (const/keys)
- State management chosen deliberately
- flutter analyze clean

## Common pitfalls

- Rebuilding large widget trees unnecessarily
- setState in the wrong scope
- Blocking the UI isolate

## Related skills

- `dart-language`
- `desktop-flutter`
- `mobile-android`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
