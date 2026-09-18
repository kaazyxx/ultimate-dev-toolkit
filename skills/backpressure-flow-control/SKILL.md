---
name: backpressure-flow-control
description: "Apply backpressure and flow control: bounded queues, credit-based flow, load shedding, timeouts. Use to prevent overload cascades."
---

# Backpressure Flow Control

**Category:** patterns

## Common pitfalls

- Unbounded queues (memory blowup)
- No load shedding under overload
- Retry storms amplifying failure

## Related skills

- `scalability-patterns`
- `backend-queues`
- `sre-slo`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
