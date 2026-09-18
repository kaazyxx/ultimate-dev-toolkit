---
name: build-tool-make
description: "Write correct Makefiles: targets, prerequisites, phony targets, variables, parallelism. Use for Makefile projects. Detect make first."
---

# Build Tool Make

**Category:** tooling  ·  **Requires (detect first):** make

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `make`

## Key commands

```bash
make -n
make -j4
```

## Checklist

- Real file targets vs .PHONY correct
- Prerequisites declared for incremental builds
- Tabs (not spaces) in recipes

## Common pitfalls

- Missing .PHONY causing stale skips
- Spaces instead of tabs
- Non-parallel-safe recipes with -j

## Related skills

- `cmake-build-tool`
- `shell-bash`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
