---
name: objective-c
description: Read, write and maintain Objective-C with ARC and Cocoa patterns. Use for .m/.h Apple sources. Detect clang/xcodebuild first.
---

# Objective C

**Category:** languages  ·  **Requires (detect first):** clang, xcodebuild

ARC-managed Objective-C interoperating with Swift.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `clang`
- `xcodebuild`

## Key commands

```bash
xcodebuild -list
clang -fobjc-arc -c file.m
```

## Checklist

- ARC ownership qualifiers correct
- No retain cycles in blocks (weakSelf)
- Nullability annotations for Swift interop

## Common pitfalls

- Retain cycles capturing self in blocks
- Messaging nil silently returning zero

## Related skills

- `swift`
- `mobile-ios`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
