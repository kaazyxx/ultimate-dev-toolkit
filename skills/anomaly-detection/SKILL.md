---
name: anomaly-detection
description: "Detect anomalies in data/metrics: statistical, isolation forest, autoencoders, thresholds, seasonality. Use for outlier/anomaly tasks."
---

# Anomaly Detection

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Common pitfalls

- Ignoring seasonality (false positives)
- Static thresholds that drift
- No labeled eval of detections

## Related skills

- `statistics-fundamentals`
- `timeseries-forecasting`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
