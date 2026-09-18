---
name: db-orm-patterns
description: Use ORMs (Prisma, SQLAlchemy, TypeORM, Hibernate, Eloquent, ActiveRecord) without N+1 and leaky abstractions. Use for ORM code.
---

# Db Orm Patterns

**Category:** databases

## Checklist

- Eager-load relations used in loops
- Generated SQL inspected for hot paths
- Transactions used for multi-write operations

## Common pitfalls

- N+1 queries from lazy relations
- Loading full objects when a projection suffices
- Trusting the ORM to be efficient blindly

## Related skills

- `db-query-optimization`
- `backend-django`
- `backend-rails`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
