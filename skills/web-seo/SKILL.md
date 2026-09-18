---
name: web-seo
description: "Optimize technical SEO: metadata, structured data, sitemaps, canonical, crawlability, performance. Use for public sites."
---

# Web Seo

**Category:** web  ·  **Requires (detect first):** npx lighthouse

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx lighthouse`

## Key commands

```bash
npx lighthouse http://localhost:3000 --only-categories=seo
```

## Checklist

- Unique titles/descriptions per page
- Structured data valid
- Sitemap + robots correct; canonical set

## Common pitfalls

- Blocking crawlers in robots.txt by accident
- Client-only content invisible to crawlers

## Related skills

- `web-performance`
- `web-frontend-nextjs`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
