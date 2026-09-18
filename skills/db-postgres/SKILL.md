---
name: db-postgres
description: "Design, query, tune and administer PostgreSQL: types, indexes, EXPLAIN, JSONB, extensions. Use for Postgres connections and .sql on Postgres. Detect psql first."
---

# Db Postgres

**Category:** databases  ·  **Requires (detect first):** psql

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `psql`

## Key commands

```bash
psql -c "SELECT version();"
psql -c "EXPLAIN ANALYZE <query>;"
```

## Checklist

- EXPLAIN ANALYZE used before optimizing
- Indexes match query predicates
- Connections pooled

## Common pitfalls

- Missing indexes causing seq scans
- Long-running transactions bloating tables
- Unbounded IN lists

## Related skills

- `sql`
- `db-query-optimization`
- `db-migrations`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
