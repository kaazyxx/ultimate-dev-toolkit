---
name: db-mysql
description: "Design, query and tune MySQL/MariaDB: storage engines, indexes, EXPLAIN, charsets. Use for MySQL connections. Detect the mysql client first."
---

# Db Mysql

**Category:** databases  ·  **Requires (detect first):** mysql

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mysql`

## Key commands

```bash
mysql -e "SELECT VERSION();"
mysql -e "EXPLAIN <query>;"
```

## Checklist

- InnoDB used for transactions
- utf8mb4 charset (not utf8)
- Indexes cover query predicates

## Common pitfalls

- utf8 (3-byte) truncating emoji/data
- Implicit type conversion defeating indexes
- Large OFFSET pagination

## Related skills

- `sql`
- `db-indexing`
- `db-query-optimization`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
