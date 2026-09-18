---
name: db-query-optimization
description: Diagnose and fix slow queries using execution plans, indexes and rewrites. Use for slow SQL/queries.
---

# Db Query Optimization

**Category:** databases

## Checklist

- Execution plan read before changing anything
- Fix the dominant cost (scan/sort/join)
- Verify with before/after timings

## Common pitfalls

- Guessing instead of reading the plan
- Adding indexes without checking the plan uses them
- SELECT * pulling unneeded data

## Related skills

- `db-indexing`
- `performance-profiling`
- `db-postgres`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
