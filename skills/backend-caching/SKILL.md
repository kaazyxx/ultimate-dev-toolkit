---
name: backend-caching
description: Add caching (in-memory, Redis, HTTP) with correct invalidation and TTLs. Use when reducing latency/load.
---

# Backend Caching

**Category:** web  ·  **Requires (detect first):** redis-cli

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `redis-cli`

## Key commands

```bash
redis-cli ping
```

## Checklist

- TTLs and invalidation strategy defined
- Cache stampede protection
- Cache keys namespaced/versioned

## Common pitfalls

- Stale data from missing invalidation
- Thundering herd on expiry
- Caching per-user data globally

## Related skills

- `db-redis`
- `web-performance`
- `backend-rate-limiting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
