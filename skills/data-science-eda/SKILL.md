---
name: data-science-eda
description: "Perform exploratory data analysis: distributions, missingness, correlations, outliers, leakage checks. Use before modeling."
---

# Data Science Eda

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Distributions and missingness inspected
- Target leakage checked
- Outliers understood, not blindly dropped

## Common pitfalls

- Data leakage from future/target info
- Drawing conclusions from tiny samples
- Ignoring class imbalance

## Related skills

- `data-pandas`
- `data-visualization`
- `statistics-fundamentals`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
