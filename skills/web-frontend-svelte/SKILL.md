---
name: web-frontend-svelte
description: Build Svelte/SvelteKit apps with reactive statements and stores. Use for .svelte files and SvelteKit projects.
---

# Web Frontend Svelte

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run dev
npm run build
npm run check
```

## Checklist

- Reactivity via $: and stores understood
- SSR vs client boundaries clear
- Accessibility warnings addressed

## Common pitfalls

- Mutating without triggering reactivity
- Leaking server-only code to client

## Related skills

- `web-frontend-astro`
- `javascript`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
