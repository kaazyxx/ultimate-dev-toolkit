---
name: web-frontend-react
description: "Build React apps: components, hooks, state, effects, performance. Use for React projects (react in package.json), .jsx/.tsx components and hook bugs."
---

# Web Frontend React

**Category:** web  ·  **Requires (detect first):** npm, npx eslint, npx vitest

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `npx eslint`
- `npx vitest`

## Key commands

```bash
npm run dev
npx eslint . --ext .tsx
npx vitest run
```

## Checklist

- Hooks obey rules of hooks
- Keys stable; effects have correct deps
- No unnecessary re-renders

## Common pitfalls

- Missing/incorrect useEffect deps
- Deriving state that should be computed
- Prop drilling instead of context/store

## Related skills

- `jsx-tsx`
- `web-state-management`
- `web-frontend-nextjs`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
