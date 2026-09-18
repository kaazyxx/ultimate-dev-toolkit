---
name: performance-testing
description: "Test performance under load and regression: thresholds, percentiles, CI gates, profiling. Use to prevent perf regressions."
---

# Performance Testing

**Category:** qa  ·  **Requires (detect first):** k6

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `k6`

## Key commands

```bash
k6 run --out json=out.json load.js
```

## Common pitfalls

- Averages hiding tail latency
- No regression gate in CI
- Unrealistic load profile

## Related skills

- `load-testing`
- `web-performance`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
