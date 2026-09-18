---
name: distributed-systems
description: "Reason about distributed systems: CAP, consistency models, consensus, partial failure, idempotency, clocks. Use for multi-node systems."
---

# Distributed Systems

**Category:** architecture

## Checklist

- Consistency vs availability tradeoff explicit
- Partial failure handled (timeouts/retries)
- Idempotency for at-least-once delivery

## Common pitfalls

- Assuming the network is reliable
- Ignoring clock skew/ordering
- No idempotency with retries

## Related skills

- `idempotency-patterns`
- `microservices-patterns`
- `system-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
