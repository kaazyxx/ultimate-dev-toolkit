---
name: mobile-react-native
description: "Build cross-platform apps with React Native/Expo: components, navigation, native modules, performance. Use for RN projects."
---

# Mobile React Native

**Category:** platforms  ·  **Requires (detect first):** npx, npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`
- `npm`

## Key commands

```bash
npx react-native doctor
npm run android
npm run ios
```

## Checklist

- Lists virtualized (FlatList)
- Bridge/native module usage minimized
- Platform differences handled

## Common pitfalls

- Rendering huge lists without virtualization
- Heavy JS blocking the bridge
- Assuming iOS/Android parity

## Related skills

- `web-frontend-react`
- `mobile-expo`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
