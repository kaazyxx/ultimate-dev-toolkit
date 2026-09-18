---
name: data-etl-pipelines
description: "Build ETL/ELT pipelines: extract, transform, load, idempotency, incremental processing. Use when moving/transforming data between systems."
---

# Data Etl Pipelines

**Category:** data-ml

## Checklist

- Idempotent, re-runnable stages
- Incremental (not full reload) where possible
- Data quality checks between stages

## Common pitfalls

- Non-idempotent loads duplicating data
- No schema/quality gates
- Full reloads that don't scale

## Related skills

- `data-airflow`
- `data-dbt`
- `data-warehousing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
