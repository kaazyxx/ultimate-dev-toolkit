---
name: data-airflow
description: "Orchestrate data workflows with Apache Airflow/Prefect/Dagster: DAGs, scheduling, retries, backfills. Use for pipeline orchestration."
---

# Data Airflow

**Category:** data-ml  ·  **Requires (detect first):** airflow

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `airflow`

## Key commands

```bash
airflow dags list
airflow tasks test <dag> <task> 2024-01-01
```

## Checklist

- Tasks idempotent for retries/backfills
- Dependencies model the real DAG
- Alerting on failures

## Common pitfalls

- Non-idempotent tasks breaking backfills
- Heavy compute in the scheduler
- Hidden data dependencies between DAGs

## Related skills

- `data-etl-pipelines`
- `pipelines`
- `cron-scheduling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
