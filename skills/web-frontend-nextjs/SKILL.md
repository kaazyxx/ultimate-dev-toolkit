---
name: web-frontend-nextjs
description: "Build Next.js apps: App Router, server/client components, routing, data fetching, SSR/SSG. Use for next.config.js projects."
---

# Web Frontend Nextjs

**Category:** web  ·  **Requires (detect first):** npm, npx next

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `npx next`

## Key commands

```bash
npm run dev
npm run build
npm run lint
```

## Checklist

- Server vs client component boundary correct
- No client-only APIs in server components
- Caching/revalidation intentional

## Common pitfalls

- Leaking secrets into client components
- Hydration mismatches
- Blocking data fetches without streaming

## Related skills

- `web-frontend-react`
- `web-seo`
- `backend-node`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
