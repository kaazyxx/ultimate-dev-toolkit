---
name: resilience-patterns
description: "Build resilient services: circuit breaker, bulkhead, retry-with-backoff, timeout, fallback. Use for fault-tolerant integrations."
---

# Resilience Patterns

**Category:** patterns

## Common pitfalls

- No timeouts (cascading hangs)
- Retries without backoff/jitter
- Circuit breaker with wrong thresholds

## Related skills

- `microservices-patterns`
- `distributed-systems`
- `incident-response`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
