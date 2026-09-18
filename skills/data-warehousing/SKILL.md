---
name: data-warehousing
description: "Model analytical warehouses (Snowflake/BigQuery/Redshift): star schema, partitioning, clustering, cost. Use for warehouse design/queries."
---

# Data Warehousing

**Category:** data-ml

## Checklist

- Star/dimensional model where it fits
- Partitioning/clustering for scan reduction
- Query cost monitored

## Common pitfalls

- SELECT * scanning huge tables (cost)
- No partitioning on large fact tables
- Unpruned partitions

## Related skills

- `data-dbt`
- `db-clickhouse`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
