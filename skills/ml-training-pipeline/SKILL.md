---
name: ml-training-pipeline
description: "Design reproducible training pipelines: data splits, seeds, checkpoints, early stopping, logging. Use when training models seriously."
---

# Ml Training Pipeline

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Deterministic splits and seeds
- Checkpointing + early stopping
- Train/val/test never leak

## Common pitfalls

- Irreproducible runs (no seeds/versioning)
- Validation leakage into training
- No checkpoint (losing long runs)

## Related skills

- `ml-experiment-tracking`
- `ml-evaluation`
- `ml-mlops`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
