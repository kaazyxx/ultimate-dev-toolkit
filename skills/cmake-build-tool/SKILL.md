---
name: cmake-build-tool
description: "Configure C/C++ builds with CMake: targets, properties, find_package, presets, cross-compilation. Use for CMakeLists.txt. Detect cmake first."
---

# Cmake Build Tool

**Category:** tooling  ·  **Requires (detect first):** cmake

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cmake`

## Key commands

```bash
cmake -S . -B build
cmake --build build -j
ctest --test-dir build
```

## Checklist

- Target-based (not global) settings
- Dependencies via find_package/FetchContent
- Out-of-source builds

## Common pitfalls

- Global flags instead of target properties
- In-source builds polluting the tree
- Hardcoded paths breaking portability

## Related skills

- `cpp`
- `c`
- `build-tool-make`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
