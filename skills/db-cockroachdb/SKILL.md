---
name: db-cockroachdb
description: "Use CockroachDB (distributed SQL, Postgres-compatible): ranges, transactions, locality. Use for CockroachDB. Detect cockroach/psql first."
---

# Db Cockroachdb

**Category:** databases  ·  **Requires (detect first):** cockroach, psql

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cockroach`
- `psql`

## Key commands

```bash
cockroach sql -e "SELECT version();"
```

## Checklist

- Retry logic for serializable transactions
- Primary keys avoid hotspots (no sequential)
- Query plans reviewed

## Common pitfalls

- Sequential primary keys creating hot ranges
- Not handling transaction retry errors

## Related skills

- `db-postgres`
- `sql`
- `db-query-optimization`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
