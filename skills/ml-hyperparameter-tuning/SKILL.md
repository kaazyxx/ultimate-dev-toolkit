---
name: ml-hyperparameter-tuning
description: "Tune hyperparameters efficiently: grid/random/Bayesian search, cross-validation, avoiding overfit-to-val. Use when optimizing models."
---

# Ml Hyperparameter Tuning

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Nested CV or a held-out test
- Search budget bounded
- Best config validated on unseen data

## Common pitfalls

- Overfitting to the validation set
- Tuning on the test set
- Unbounded search wasting compute

## Related skills

- `ml-scikit-learn`
- `ml-evaluation`
- `ml-experiment-tracking`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
