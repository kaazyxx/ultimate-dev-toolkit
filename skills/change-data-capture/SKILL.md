---
name: change-data-capture
description: "Stream database changes (Debezium/CDC): log-based capture, ordering, schema changes, idempotency. Use for real-time data sync."
---

# Change Data Capture

**Category:** data-eng

## Common pitfalls

- Missing/duplicate events without idempotency
- Schema changes breaking consumers
- Backpressure on the source DB

## Related skills

- `data-streaming`
- `message-broker-ops`
- `db-transactions`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
