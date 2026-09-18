---
name: concurrency-patterns
description: "Write correct concurrent code: threads, async, locks, channels, immutability, avoiding races/deadlocks. Use for multithreaded/async code."
---

# Concurrency Patterns

**Category:** architecture

## Checklist

- Shared mutable state minimized
- Locks ordered to avoid deadlock
- Race conditions tested (thread/race detectors)

## Common pitfalls

- Data races on shared state
- Deadlocks from lock ordering
- Blocking calls in async contexts

## Related skills

- `go`
- `rust`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
