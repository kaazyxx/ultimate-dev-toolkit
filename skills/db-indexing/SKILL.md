---
name: db-indexing
description: "Design effective indexes: composite, covering, partial, and when NOT to index. Use when queries are slow or over-indexed."
---

# Db Indexing

**Category:** databases

## Checklist

- Index columns ordered by selectivity/usage
- Covering indexes for hot queries
- Unused/duplicate indexes removed

## Common pitfalls

- Indexing everything (write cost, bloat)
- Wrong column order in composite indexes
- Functions on columns defeating indexes

## Related skills

- `db-query-optimization`
- `db-postgres`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
