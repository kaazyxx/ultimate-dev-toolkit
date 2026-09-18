---
name: db-transactions
description: "Use transactions and isolation levels correctly: atomicity, locking, deadlocks, retries. Use for multi-step data changes."
---

# Db Transactions

**Category:** databases

## Checklist

- Isolation level matches consistency needs
- Transactions short to reduce lock contention
- Deadlocks handled with retry

## Common pitfalls

- Long transactions holding locks
- Assuming default isolation prevents all anomalies
- External calls inside a transaction

## Related skills

- `db-postgres`
- `backend-queues`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
