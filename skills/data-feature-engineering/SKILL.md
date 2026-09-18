---
name: data-feature-engineering
description: "Engineer features for ML: encoding, scaling, aggregation, leakage-free transforms, feature stores. Use when preparing model inputs."
---

# Data Feature Engineering

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Transforms fit on train only (no leakage)
- Encoding suits the model
- Feature/label alignment verified

## Common pitfalls

- Fitting scalers/encoders on the full dataset (leakage)
- Target leakage via engineered features
- Train/serve skew

## Related skills

- `data-cleaning`
- `ml-scikit-learn`
- `ml-mlops`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
