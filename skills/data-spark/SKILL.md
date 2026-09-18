---
name: data-spark
description: "Process big data with Apache Spark (PySpark/Scala): DataFrames, partitions, shuffles, joins. Use for large-scale distributed data. Detect spark first."
---

# Data Spark

**Category:** data-ml  ·  **Requires (detect first):** spark-submit

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `spark-submit`

## Key commands

```bash
spark-submit job.py
```

## Checklist

- Shuffles/partitions tuned
- Broadcast small joins
- Skew handled

## Common pitfalls

- Data skew stalling a few tasks
- Collecting large results to the driver (OOM)
- Too many small files

## Related skills

- `data-etl-pipelines`
- `data-warehousing`
- `scala`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
