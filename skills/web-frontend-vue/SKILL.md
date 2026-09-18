---
name: web-frontend-vue
description: "Build Vue 3 apps: Composition API, reactivity, SFCs, Pinia. Use for .vue files and Vue projects."
---

# Web Frontend Vue

**Category:** web  ·  **Requires (detect first):** npm, npx vue-tsc, npx eslint

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `npx vue-tsc`
- `npx eslint`

## Key commands

```bash
npm run dev
npx vue-tsc --noEmit
npx vitest run
```

## Checklist

- ref/reactive used correctly
- Props typed; emits declared
- No reactivity lost by destructuring reactive()

## Common pitfalls

- Losing reactivity by destructuring reactive objects
- Mutating props directly
- Heavy watchers causing loops

## Related skills

- `web-frontend-nuxt`
- `web-state-management`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
