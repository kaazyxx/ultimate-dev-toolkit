---
name: mobile-expo
description: "Build and ship React Native apps with Expo: EAS build/update, config plugins, OTA updates. Use for Expo projects."
---

# Mobile Expo

**Category:** platforms  ·  **Requires (detect first):** npx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`

## Key commands

```bash
npx expo start
npx eas build
npx eas update
```

## Checklist

- Managed vs bare workflow chosen deliberately
- OTA updates for JS-only changes
- Native config via plugins

## Common pitfalls

- Expecting native module freedom in managed workflow
- Shipping breaking native changes as OTA

## Related skills

- `mobile-react-native`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
