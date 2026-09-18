---
name: desktop-flutter
description: "Build desktop apps with Flutter for Windows/macOS/Linux: platform channels, window management. Use for Flutter desktop targets."
---

# Desktop Flutter

**Category:** platforms  ·  **Requires (detect first):** flutter

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `flutter`

## Key commands

```bash
flutter config --enable-windows-desktop
flutter build windows
```

## Checklist

- Desktop-appropriate UX (not just mobile)
- Platform channels for native features
- Window sizing/DPI handled

## Common pitfalls

- Shipping a phone UI on desktop
- Missing platform-specific integrations

## Related skills

- `mobile-flutter`
- `dart-language`
- `desktop-electron`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
