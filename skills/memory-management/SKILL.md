---
name: memory-management
description: "Manage memory correctly: allocation, ownership, leaks, GC tuning, fragmentation across languages. Use for memory bugs/leaks/tuning."
---

# Memory Management

**Category:** architecture

## Checklist

- Ownership/lifetimes clear
- Leaks checked (profilers/sanitizers)
- GC pressure minimized in hot paths

## Common pitfalls

- Leaks from retained references/listeners
- Use-after-free in manual memory languages
- Excessive allocation in hot loops

## Related skills

- `cpp`
- `rust`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
