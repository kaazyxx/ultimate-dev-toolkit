---
name: cpp
description: "Write and review modern C++ (17/20): RAII, smart pointers, move semantics, templates, concurrency. Use for .cpp/.hpp files, CMake projects, and C++ build/UB issues."
---

# Cpp

**Category:** languages  ·  **Requires (detect first):** g++, clang++, cmake, clang-tidy, clang-format

Modern C++ with RAII, no raw owning pointers, sanitizers on.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `g++`
- `clang++`
- `cmake`
- `clang-tidy`
- `clang-format`

## Key commands

```bash
cmake -S . -B build && cmake --build build
g++ -std=c++20 -Wall -Wextra -fsanitize=address,undefined -g main.cpp
clang-tidy main.cpp --
```

## Checklist

- Ownership via RAII/smart pointers, not new/delete
- Rule of zero/five respected
- Data races checked under TSan

## Common pitfalls

- Dangling references to temporaries
- Manual new/delete leaking on exceptions
- Iterator invalidation

## Related skills

- `c`
- `rust`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
