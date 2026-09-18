---
name: saga-orchestration
description: "Coordinate distributed transactions with sagas: orchestration vs choreography, compensations, idempotency. Use for cross-service consistency."
---

# Saga Orchestration

**Category:** patterns

## Common pitfalls

- No compensating actions on failure
- Non-idempotent steps
- Lost saga state on crash

## Related skills

- `distributed-systems`
- `microservices-patterns`
- `idempotency-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
