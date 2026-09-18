---
name: bazel-build-tool
description: "Build large/polyglot monorepos with Bazel: BUILD files, hermeticity, remote cache. Use for Bazel projects. Detect bazel first."
---

# Bazel Build Tool

**Category:** tooling  ·  **Requires (detect first):** bazel

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `bazel`

## Key commands

```bash
bazel build //...
bazel test //...
```

## Checklist

- Hermetic, reproducible builds
- Fine-grained targets for caching
- Remote cache configured

## Common pitfalls

- Non-hermetic rules breaking caching
- Over-coarse targets killing incrementality

## Related skills

- `monorepo-tools`
- `cmake-build-tool`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
