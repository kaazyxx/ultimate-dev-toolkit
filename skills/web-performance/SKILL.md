---
name: web-performance
description: "Optimize web performance: Core Web Vitals, bundle size, lazy loading, caching, rendering. Use when pages are slow or fail CWV."
---

# Web Performance

**Category:** web  ·  **Requires (detect first):** npx lighthouse

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx lighthouse`

## Key commands

```bash
npx lighthouse http://localhost:3000 --view
```

## Checklist

- LCP/CLS/INP measured before optimizing
- Images sized/lazy; JS split
- Caching and CDN headers set

## Common pitfalls

- Shipping unused JS
- Layout shift from unsized media
- Blocking the main thread

## Related skills

- `web-vite`
- `web-seo`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
