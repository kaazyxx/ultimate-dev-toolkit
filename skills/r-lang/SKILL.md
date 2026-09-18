---
name: r-lang
description: Write and run R for statistics and data analysis, including tidyverse workflows. Use for .R/.Rmd files and RStudio projects. Detect Rscript before claiming support.
---

# R Lang

**Category:** languages  ·  **Requires (detect first):** Rscript, R

Reproducible statistical analysis in R.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `Rscript`
- `R`

## Key commands

```bash
Rscript -e 'sessionInfo()'
Rscript analysis.R
Rscript -e 'testthat::test_dir("tests")'
```

## Checklist

- Package deps captured (renv/DESCRIPTION)
- Analysis reproducible from a clean session
- Vectorized operations preferred over loops

## Common pitfalls

- Relying on the global environment / hidden state
- Row-wise loops where vectorization applies

## Related skills

- `data-science-eda`
- `python`
- `julia`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
