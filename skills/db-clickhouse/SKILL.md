---
name: db-clickhouse
description: "Use ClickHouse for analytical/OLAP workloads: MergeTree, columnar storage, materialized views. Use for ClickHouse. Detect clickhouse-client first."
---

# Db Clickhouse

**Category:** databases  ·  **Requires (detect first):** clickhouse-client

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `clickhouse-client`

## Key commands

```bash
clickhouse-client -q "SELECT version()"
```

## Checklist

- ORDER BY key matches query filters
- Partitioning sized sensibly
- Batch inserts, not row-by-row

## Common pitfalls

- Small frequent inserts hurting merges
- Mutations treated as cheap updates

## Related skills

- `db-duckdb`
- `data-warehousing`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
