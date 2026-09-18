---
name: data-numpy
description: "Compute with NumPy arrays: vectorization, broadcasting, dtypes, memory layout. Use for numerical array work in Python."
---

# Data Numpy

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import numpy as np; print(np.__version__)"
```

## Checklist

- Vectorized/broadcast ops, no Python loops
- dtype and memory layout chosen deliberately
- Views vs copies understood

## Common pitfalls

- Python loops over arrays
- Unexpected broadcasting shapes
- Integer overflow with small dtypes

## Related skills

- `data-pandas`
- `ml-scikit-learn`
- `julia`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
