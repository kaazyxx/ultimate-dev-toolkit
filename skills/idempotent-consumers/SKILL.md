---
name: idempotent-consumers
description: "Build consumers that safely process at-least-once delivery: dedup keys, idempotent writes, ordering. Use for reliable event processing."
---

# Idempotent Consumers

**Category:** patterns

## Common pitfalls

- Double-processing without dedup
- Assuming exactly-once from the broker
- Ignoring out-of-order events

## Related skills

- `idempotency-patterns`
- `backend-queues`
- `message-broker-ops`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
