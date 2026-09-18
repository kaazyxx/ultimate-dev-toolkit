---
name: web-frontend-solid
description: Build SolidJS apps with fine-grained reactivity and signals. Use for Solid projects and .tsx Solid components.
---

# Web Frontend Solid

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run dev
npm run build
```

## Checklist

- Signals read inside tracking scopes
- No accidental destructuring of props
- Effects cleaned up

## Common pitfalls

- Destructuring props breaks reactivity
- Confusing Solid JSX with React JSX semantics

## Related skills

- `jsx-tsx`
- `web-frontend-react`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
