---
name: data-pandas
description: "Manipulate tabular data with pandas: loading, cleaning, joins, groupby, reshaping. Use for pandas/.csv/.parquet analysis in Python."
---

# Data Pandas

**Category:** data-ml  ·  **Requires (detect first):** python, pip

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `pip`

## Key commands

```bash
python -c "import pandas as pd; print(pd.__version__)"
```

## Checklist

- Vectorized ops over apply/loops
- dtypes correct (parse dates/categories)
- Copy vs view understood (SettingWithCopy)

## Common pitfalls

- Row-wise apply/iterrows on big frames (slow)
- SettingWithCopyWarning masking bugs
- Loading huge CSVs whole instead of chunking

## Related skills

- `data-numpy`
- `data-polars`
- `data-science-eda`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
