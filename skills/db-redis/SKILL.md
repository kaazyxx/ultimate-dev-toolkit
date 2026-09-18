---
name: db-redis
description: "Use Redis for caching, sessions, queues, pub/sub, rate limiting: data types, TTLs, persistence. Use for Redis connections. Detect redis-cli first."
---

# Db Redis

**Category:** databases  ·  **Requires (detect first):** redis-cli

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `redis-cli`

## Key commands

```bash
redis-cli ping
redis-cli info memory
```

## Checklist

- TTLs set to bound memory
- Right data type for the job
- Persistence/eviction policy chosen

## Common pitfalls

- Unbounded keys with no TTL (OOM)
- KEYS in production (use SCAN)
- Treating Redis as durable without persistence config

## Related skills

- `backend-caching`
- `backend-queues`
- `backend-rate-limiting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
