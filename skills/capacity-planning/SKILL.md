---
name: capacity-planning
description: "Plan capacity and autoscaling: load testing, headroom, cost/performance tradeoffs. Use when sizing infrastructure."
---

# Capacity Planning

**Category:** devops  ·  **Requires (detect first):** k6, wrk

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `k6`
- `wrk`

## Key commands

```bash
k6 run load.js
wrk -t4 -c100 -d30s http://localhost:8080
```

## Checklist

- Load tested to find limits
- Autoscaling thresholds/headroom set
- Cost vs performance balanced

## Common pitfalls

- Sizing from guesses, not load tests
- Autoscaling on the wrong metric
- No headroom for spikes

## Related skills

- `performance-profiling`
- `cloud-cost-optimization`
- `load-balancing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
