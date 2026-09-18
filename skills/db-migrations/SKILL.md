---
name: db-migrations
description: Write safe, reversible schema migrations with zero-downtime patterns (expand/contract). Use when changing schemas.
---

# Db Migrations

**Category:** databases

## Checklist

- Migrations reversible or with a tested rollback
- Backward-compatible during deploy (expand then contract)
- Large tables migrated without long locks

## Common pitfalls

- Adding a NOT NULL column with no default on a big table (lock)
- Destructive migration with no backup
- Renames that break running code

## Related skills

- `db-postgres`
- `deployment-strategies`
- `safe-execution`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
