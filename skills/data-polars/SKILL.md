---
name: data-polars
description: Use Polars for fast, memory-efficient dataframes with lazy execution. Use for large tabular data in Python/Rust.
---

# Data Polars

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import polars as pl; print(pl.__version__)"
```

## Checklist

- Lazy API used for query optimization
- Expressions over Python UDFs
- Streaming for larger-than-memory data

## Common pitfalls

- Falling back to Python UDFs and losing speed
- Collecting too early in lazy pipelines

## Related skills

- `data-pandas`
- `db-duckdb`
- `data-etl-pipelines`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
