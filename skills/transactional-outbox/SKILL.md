---
name: transactional-outbox
description: "Reliably publish events with the outbox pattern: atomic DB write + event, relay, dedup. Use to avoid dual-write inconsistency."
---

# Transactional Outbox

**Category:** patterns

## Common pitfalls

- Dual writes (DB + broker) losing events
- No dedup on the consumer
- Outbox table growth unmanaged

## Related skills

- `change-data-capture`
- `message-broker-ops`
- `idempotency-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
