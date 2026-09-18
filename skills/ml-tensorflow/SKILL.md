---
name: ml-tensorflow
description: "Build and train models with TensorFlow/Keras: layers, tf.data, training, SavedModel. Use for TF/Keras models. Detect tensorflow first."
---

# Ml Tensorflow

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import tensorflow as tf; print(tf.__version__)"
```

## Checklist

- tf.data pipeline efficient (prefetch/cache)
- Metrics/loss appropriate
- Reproducible seeds

## Common pitfalls

- Input pipeline bottlenecking the GPU
- Mismatched shapes silently broadcasting
- Not setting seeds (irreproducible)

## Related skills

- `ml-pytorch`
- `ml-training-pipeline`
- `ml-model-serving`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
