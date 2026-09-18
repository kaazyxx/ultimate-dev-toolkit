---
name: web-frontend-nuxt
description: "Build Nuxt 3 apps: pages, composables, server routes, SSR. Use for nuxt.config.ts projects."
---

# Web Frontend Nuxt

**Category:** web  ·  **Requires (detect first):** npm, npx nuxi

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `npx nuxi`

## Key commands

```bash
npm run dev
npm run build
npx nuxi typecheck
```

## Checklist

- useAsyncData/useFetch used correctly
- Server vs client state separated
- SEO meta set

## Common pitfalls

- State shared across requests on the server
- Hydration mismatches

## Related skills

- `web-frontend-vue`
- `web-seo`
- `backend-node`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
