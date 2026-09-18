---
name: mobile-ios
description: "Build native iOS apps (Swift/UIKit/SwiftUI): lifecycle, navigation, storage, App Store constraints. Use for iOS projects. Detect xcodebuild first."
---

# Mobile Ios

**Category:** platforms  ·  **Requires (detect first):** xcodebuild, swift

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `xcodebuild`
- `swift`

## Key commands

```bash
xcodebuild -list
xcodebuild test -scheme App
```

## Checklist

- Main-thread UI updates only
- Memory/retain cycles checked
- Permissions requested with usage strings

## Common pitfalls

- Blocking the main thread
- Retain cycles leaking view controllers
- Missing Info.plist usage descriptions

## Related skills

- `swift`
- `mobile-swiftui`
- `security-mobile`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
