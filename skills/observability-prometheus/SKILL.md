---
name: observability-prometheus
description: "Instrument and query metrics with Prometheus/PromQL: exporters, scraping, recording/alerting rules. Use for metrics/monitoring."
---

# Observability Prometheus

**Category:** devops  ·  **Requires (detect first):** promtool

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `promtool`

## Key commands

```bash
promtool check rules rules.yml
promtool query instant http://localhost:9090 'up'
```

## Checklist

- Labels bounded in cardinality
- Alerts actionable, not noisy
- Recording rules for expensive queries

## Common pitfalls

- High-cardinality labels (user id/request id)
- Alert fatigue from noisy rules

## Related skills

- `observability`
- `observability-grafana`
- `observability-opentelemetry`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
