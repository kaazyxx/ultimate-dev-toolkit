---
name: scalability-patterns
description: "Scale systems: horizontal scaling, sharding, replication, caching, async, statelessness, back-pressure. Use when a system must handle more load."
---

# Scalability Patterns

**Category:** architecture

## Checklist

- Stateless services scale horizontally
- Caching and async offload hot paths
- Back-pressure prevents overload

## Common pitfalls

- Scaling a stateful bottleneck
- Cache without invalidation strategy
- No back-pressure (cascading failure)

## Related skills

- `system-design`
- `backend-caching`
- `load-balancing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
