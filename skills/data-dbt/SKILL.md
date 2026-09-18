---
name: data-dbt
description: "Transform warehouse data with dbt: models, tests, sources, incremental materializations. Use for dbt projects."
---

# Data Dbt

**Category:** data-ml  ·  **Requires (detect first):** dbt

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dbt`

## Key commands

```bash
dbt run
dbt test
dbt build
```

## Checklist

- Tests (unique/not_null/relationships) on models
- Incremental models for large tables
- Sources/refs documented

## Common pitfalls

- Full refresh on huge models
- No tests (silent data quality drift)
- Circular refs

## Related skills

- `data-warehousing`
- `sql`
- `data-etl-pipelines`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
