---
name: db-oracle
description: "Write PL/SQL and work with Oracle: packages, cursors, hints, sequences. Use for PL/SQL and Oracle connections. Detect sqlplus first."
---

# Db Oracle

**Category:** databases  ·  **Requires (detect first):** sqlplus

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sqlplus`

## Key commands

```bash
sqlplus -S user/pass@db @script.sql
```

## Checklist

- Bind variables used (no literal SQL)
- Cursors closed; bulk operations for volume
- Exceptions handled in blocks

## Common pitfalls

- Row-by-row processing instead of bulk
- Hardcoded literals defeating cursor sharing

## Related skills

- `sql`
- `db-query-optimization`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
