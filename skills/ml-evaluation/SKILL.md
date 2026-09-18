---
name: ml-evaluation
description: "Evaluate models rigorously: right metrics, baselines, confidence, error analysis, fairness. Use when judging model quality."
---

# Ml Evaluation

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Metric matches business goal
- Compared to a real baseline
- Error slices analyzed (not just aggregate)

## Common pitfalls

- Optimizing accuracy on imbalanced data
- No baseline to compare against
- Test set reused for tuning

## Related skills

- `ml-scikit-learn`
- `statistics-fundamentals`
- `llm-evaluation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
