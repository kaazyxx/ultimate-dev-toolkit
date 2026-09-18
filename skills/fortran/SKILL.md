---
name: fortran
description: "Write and compile Fortran (77/90+) for numerical/HPC code: arrays, modules, intrinsics. Use for .f90/.f files. Detect gfortran first."
---

# Fortran

**Category:** languages  ·  **Requires (detect first):** gfortran

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gfortran`

## Key commands

```bash
gfortran -O2 -Wall prog.f90 -o prog
gfortran -fcheck=all prog.f90
```

## Checklist

- Array bounds/shape correct (column-major)
- implicit none used
- Precision (kind) chosen deliberately

## Common pitfalls

- Column-major vs row-major confusion
- Uninitialized variables without implicit none
- Array bound errors (use -fcheck)

## Related skills

- `c`
- `matlab`
- `julia`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
