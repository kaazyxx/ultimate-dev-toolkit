---
name: matlab
description: Read, write and reason about MATLAB/Octave numerical code. Use for .m files. Detect matlab or octave before claiming you can execute it.
---

# Matlab

**Category:** languages  ·  **Requires (detect first):** octave, matlab

Matrix-oriented numerical code; run with MATLAB or GNU Octave if present.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `octave`
- `matlab`

## Key commands

```bash
octave --no-gui script.m
matlab -batch "script"
```

## Checklist

- Vectorized matrix ops over element loops
- Preallocate arrays in loops
- Runtime actually available (matlab/octave) before executing

## Common pitfalls

- 1-based indexing mistakes when porting
- Growing arrays inside loops

## Related skills

- `python`
- `julia`
- `data-science-eda`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
