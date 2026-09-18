---
name: chapel
description: "Write Chapel: parallel/HPC language with data and task parallelism. Use for .chpl files. Detect chpl first."
---

# Chapel

**Category:** languages  ·  **Requires (detect first):** chpl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `chpl`

## Key commands

```bash
chpl program.chpl -o program
./program
```

## Common pitfalls

- Ignoring locality/data distribution
- Serial code where parallel fits
- Race conditions in forall

## Related skills

- `numerical-methods`
- `fortran`
- `concurrency-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
