---
name: db-sqlserver
description: "Write T-SQL and work with SQL Server: stored procs, indexes, execution plans. Use for T-SQL and SQL Server connections. Detect sqlcmd first."
---

# Db Sqlserver

**Category:** databases  ·  **Requires (detect first):** sqlcmd

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sqlcmd`

## Key commands

```bash
sqlcmd -Q "SELECT @@VERSION;"
```

## Checklist

- Execution plan reviewed
- SET NOCOUNT ON in procs
- Parameterized queries (no dynamic SQL concat)

## Common pitfalls

- Dynamic SQL injection risk
- Implicit conversions causing scans
- Missing indexes flagged in plan

## Related skills

- `sql`
- `db-query-optimization`
- `db-indexing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
