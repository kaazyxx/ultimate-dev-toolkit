---
name: load-testing
description: "Load/stress test systems (k6/Locust/JMeter/wrk): throughput, latency percentiles, breaking point. Use to validate performance/capacity."
---

# Load Testing

**Category:** testing  ·  **Requires (detect first):** k6

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `k6`

## Key commands

```bash
k6 run load.js
```

## Checklist

- Realistic load profile modeled
- Latency percentiles (p95/p99), not averages
- Breaking point identified

## Common pitfalls

- Testing with unrealistic data/traffic
- Reporting averages hiding tail latency
- Load testing prod without care

## Related skills

- `capacity-planning`
- `performance-profiling`
- `e2e-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
