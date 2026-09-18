---
name: numerical-methods
description: "Apply numerical methods: linear algebra, ODE/PDE solvers, optimization, stability, conditioning. Use for scientific computing correctness."
---

# Numerical Methods

**Category:** scientific  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import numpy, scipy; print(scipy.__version__)"
```

## Checklist

- Condition number / stability considered
- Convergence and error tolerances set
- Vectorized, not Python loops

## Common pitfalls

- Catastrophic cancellation / precision loss
- Unstable schemes diverging
- Ignoring ill-conditioning

## Related skills

- `data-numpy`
- `julia`
- `fortran`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
