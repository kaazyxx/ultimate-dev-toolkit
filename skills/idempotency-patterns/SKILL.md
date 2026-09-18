---
name: idempotency-patterns
description: "Make operations idempotent: idempotency keys, dedup, upserts, exactly-once semantics. Use for retryable/async operations and payments."
---

# Idempotency Patterns

**Category:** architecture

## Checklist

- Idempotency keys on unsafe operations
- Dedup store for processed requests
- Retries safe by construction

## Common pitfalls

- Double-charging/double-processing on retry
- Non-idempotent webhooks
- Assuming exactly-once from the transport

## Related skills

- `distributed-systems`
- `backend-queues`
- `backend-rate-limiting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
