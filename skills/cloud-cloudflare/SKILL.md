---
name: cloud-cloudflare
description: "Build on Cloudflare: Workers, Pages, R2, KV, D1, CDN/WAF. Use for Cloudflare edge projects. Detect wrangler first."
---

# Cloud Cloudflare

**Category:** platforms  ·  **Requires (detect first):** npx wrangler

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx wrangler`

## Key commands

```bash
npx wrangler whoami
npx wrangler deploy
```

## Checklist

- Edge constraints understood (CPU/time limits)
- Secrets via wrangler secret
- Caching/WAF rules intentional

## Common pitfalls

- Assuming Node APIs in Workers runtime
- Secrets in wrangler.toml
- Unbounded KV/R2 usage cost

## Related skills

- `cloud-serverless`
- `web-performance`
- `backend-node`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
