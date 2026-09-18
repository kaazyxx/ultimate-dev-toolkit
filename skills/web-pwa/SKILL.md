---
name: web-pwa
description: "Add PWA features: service workers, offline caching, manifest, installability. Use when making a web app installable/offline."
---

# Web Pwa

**Category:** web  ·  **Requires (detect first):** npx workbox

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx workbox`

## Key commands

```bash
npx workbox generateSW
```

## Checklist

- Cache strategy matches content freshness needs
- Manifest complete and icons present
- Update flow handles stale caches

## Common pitfalls

- Caching too aggressively and serving stale assets
- No update/skipWaiting strategy

## Related skills

- `web-performance`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
