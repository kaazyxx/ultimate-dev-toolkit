---
name: web-frontend-astro
description: Build Astro sites with islands architecture and content collections. Use for astro.config.mjs projects and .astro files.
---

# Web Frontend Astro

**Category:** web  ·  **Requires (detect first):** npm, npx astro

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `npx astro`

## Key commands

```bash
npm run dev
npm run build
npx astro check
```

## Checklist

- Ship minimal JS (islands only where needed)
- Content collections typed
- Prerender vs SSR chosen deliberately

## Common pitfalls

- Hydrating everything and losing the perf win
- Mixing framework islands carelessly

## Related skills

- `web-frontend-svelte`
- `web-seo`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
