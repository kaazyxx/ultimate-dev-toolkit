---
name: csv-processing
description: "Process CSV/TSV robustly: delimiters, quoting, encoding, large files, edge cases. Use for tabular text data."
---

# Csv Processing

**Category:** automation  ·  **Requires (detect first):** python, csvkit

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `csvkit`

## Key commands

```bash
csvstat data.csv
python -c "import csv"
```

## Checklist

- Proper CSV parser (not naive split)
- Quoting/embedded delimiters handled
- Encoding detected/declared

## Common pitfalls

- Splitting on commas naively (breaks quoted fields)
- Encoding mismatches
- Loading giant CSVs into memory

## Related skills

- `data-pandas`
- `data-format-conversion`
- `text-processing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
