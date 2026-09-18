---
name: dart-language
description: "Write, analyze and test Dart (Flutter and standalone): null safety, async, isolates. Use for .dart files and pubspec.yaml. Detect dart first."
---

# Dart Language

**Category:** languages  ·  **Requires (detect first):** dart

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dart`

## Key commands

```bash
dart analyze
dart format --output=none --set-exit-if-changed .
dart test
```

## Checklist

- Sound null safety used
- async/await and Futures handled
- dart analyze clean

## Common pitfalls

- Ignoring null-safety warnings with !
- Blocking the event loop
- Unawaited futures

## Related skills

- `mobile-flutter`
- `desktop-flutter`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
