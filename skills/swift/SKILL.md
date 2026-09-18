---
name: swift
description: "Write, build and test Swift (SwiftPM, iOS/macOS): optionals, value types, protocols, concurrency. Use for .swift files and Package.swift. Detect swift/xcodebuild first."
---

# Swift

**Category:** languages  ·  **Requires (detect first):** swift, swiftformat, xcodebuild

Safe, value-oriented Swift with structured concurrency.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `swift`
- `swiftformat`
- `xcodebuild`

## Key commands

```bash
swift build
swift test
swiftformat --lint .
```

## Checklist

- Optionals unwrapped safely (no force unwrap in prod)
- Value semantics preferred; reference cycles avoided
- async/await used over completion soup

## Common pitfalls

- Force-unwrapping optionals causing crashes
- Retain cycles from strong self captures
- Blocking the main actor

## Related skills

- `objective-c`
- `mobile-ios`
- `swiftui-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
