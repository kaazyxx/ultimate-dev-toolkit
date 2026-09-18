---
name: julia
description: Write and run Julia for numerical/scientific computing with its package manager and test suite. Use for .jl files and Project.toml. Detect the julia binary first.
---

# Julia

**Category:** languages  ·  **Requires (detect first):** julia

High-performance numerical code with typed multiple dispatch.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `julia`

## Key commands

```bash
julia --project -e 'using Pkg; Pkg.instantiate()'
julia --project script.jl
julia --project -e 'using Pkg; Pkg.test()'
```

## Checklist

- Type-stable hot functions (@code_warntype)
- Environment pinned via Project/Manifest
- Benchmarks with BenchmarkTools, not @time in global scope

## Common pitfalls

- Type instability killing performance
- Global-scope benchmarking misleading results

## Related skills

- `python`
- `r-lang`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
