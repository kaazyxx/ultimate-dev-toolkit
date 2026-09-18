---
name: data-cleaning
description: "Clean and validate messy data: types, duplicates, missing values, encodings, schema validation. Use when preparing raw data."
---

# Data Cleaning

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Schema/constraints validated (pandera/great_expectations)
- Missing-value strategy justified
- Duplicates/encoding issues resolved

## Common pitfalls

- Imputing before splitting (leakage)
- Silently dropping rows that matter
- Mangled encodings (UTF-8 vs latin-1)

## Related skills

- `data-pandas`
- `data-science-eda`
- `data-etl-pipelines`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
