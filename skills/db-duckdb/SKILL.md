---
name: db-duckdb
description: Use DuckDB for fast local analytical SQL over files (Parquet/CSV). Use for .duckdb and analytical queries on files. Detect duckdb first.
---

# Db Duckdb

**Category:** databases  ·  **Requires (detect first):** duckdb

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `duckdb`

## Key commands

```bash
duckdb -c "SELECT * FROM read_parquet('data.parquet') LIMIT 5;"
```

## Checklist

- Columnar formats (Parquet) preferred
- Pushdown filters used
- Memory limits set for big files

## Common pitfalls

- Loading whole CSVs when Parquet would push down
- Ignoring memory limits on large scans

## Related skills

- `db-clickhouse`
- `data-pandas`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
