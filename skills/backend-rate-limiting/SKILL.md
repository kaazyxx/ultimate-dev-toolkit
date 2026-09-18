---
name: backend-rate-limiting
description: Protect APIs with rate limiting and throttling (token bucket, sliding window). Use to prevent abuse/overload.
---

# Backend Rate Limiting

**Category:** web  ·  **Requires (detect first):** redis-cli

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `redis-cli`

## Checklist

- Limits per key (user/IP/API key)
- 429 with Retry-After returned
- Distributed limiter (Redis) for multi-instance

## Common pitfalls

- In-memory limiter failing across instances
- Rate limiting after expensive work, not before

## Related skills

- `backend-caching`
- `security-web`
- `backend-auth`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
