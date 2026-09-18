---
name: computer-algebra
description: "Do symbolic math (SymPy/SageMath/Maxima): algebra, calculus, equation solving, simplification. Use for symbolic computation."
---

# Computer Algebra

**Category:** scientific  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import sympy; print(sympy.__version__)"
```

## Common pitfalls

- Symbolic blowup (huge expressions)
- Numeric vs symbolic confusion
- Assuming simplification is canonical

## Related skills

- `numerical-methods`
- `matlab`
- `julia`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
