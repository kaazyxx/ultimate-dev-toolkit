---
name: ml-scikit-learn
description: "Build classical ML with scikit-learn: pipelines, cross-validation, metrics, model selection. Use for tabular ML in Python."
---

# Ml Scikit Learn

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import sklearn; print(sklearn.__version__)"
```

## Checklist

- Pipeline prevents leakage (fit in CV)
- Metric matches the problem
- Cross-validation, not single split

## Common pitfalls

- Preprocessing outside the CV pipeline (leakage)
- Accuracy on imbalanced data misleading
- Overfitting to the test set via tuning

## Related skills

- `data-feature-engineering`
- `ml-evaluation`
- `ml-hyperparameter-tuning`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
