---
name: model-monitoring
description: "Monitor ML in production: data/prediction drift, performance decay, alerting, retraining triggers. Use for deployed models."
---

# Model Monitoring

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Common pitfalls

- No drift detection (silent decay)
- Monitoring only infra, not model quality
- No ground-truth feedback loop

## Related skills

- `ml-model-serving`
- `ml-mlops`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
