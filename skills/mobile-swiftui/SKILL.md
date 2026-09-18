---
name: mobile-swiftui
description: "Build SwiftUI interfaces: declarative views, @State/@Observable, navigation, performance. Use for SwiftUI code."
---

# Mobile Swiftui

**Category:** platforms  ·  **Requires (detect first):** swift, xcodebuild

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `swift`
- `xcodebuild`

## Key commands

```bash
swift build
xcodebuild test -scheme App
```

## Checklist

- State ownership correct (@State vs @Observable)
- Views small and composed
- Expensive work off the view body

## Common pitfalls

- Heavy computation in the view body
- State duplicated across sources of truth
- Overusing AnyView

## Related skills

- `swift`
- `mobile-ios`
- `make-interfaces-feel-better`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
