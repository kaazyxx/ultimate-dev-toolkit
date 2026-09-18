---
name: feature-store
description: "Build a feature store (Feast/Tecton): offline/online parity, point-in-time correctness, reuse. Use for ML feature infrastructure."
---

# Feature Store

**Category:** data-ml  ·  **Requires (detect first):** feast

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `feast`

## Key commands

```bash
feast apply
feast materialize
```

## Common pitfalls

- Train/serve skew (offline vs online)
- Point-in-time leakage in training
- Stale online features

## Related skills

- `data-feature-engineering`
- `ml-mlops`
- `data-etl-pipelines`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
