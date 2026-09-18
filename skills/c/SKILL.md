---
name: c
description: Write, compile, analyze and debug C with attention to memory safety and undefined behavior. Use for .c/.h files, Makefiles, and segfault/UB debugging.
---

# C

**Category:** languages  ·  **Requires (detect first):** gcc, clang, make, valgrind, clang-tidy

Portable C with warnings-as-errors, sanitizers and no UB.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gcc`
- `clang`
- `make`
- `valgrind`
- `clang-tidy`

## Key commands

```bash
gcc -Wall -Wextra -Werror -fsanitize=address,undefined -g main.c -o app
valgrind --leak-check=full ./app
clang-tidy main.c --
```

## Checklist

- Compiled with -Wall -Wextra and sanitizers in dev
- All malloc paired with free; no leaks in valgrind
- No unchecked buffer sizes

## Common pitfalls

- Buffer overflows and off-by-one
- Use-after-free / double-free
- Undefined behavior masked by -O2

## Related skills

- `cpp`
- `rust`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
