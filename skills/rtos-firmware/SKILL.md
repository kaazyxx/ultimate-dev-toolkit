---
name: rtos-firmware
description: "Build on an RTOS (FreeRTOS/Zephyr): tasks, priorities, queues, semaphores, ISR-safe APIs, priority inversion. Use for RTOS firmware."
---

# Rtos Firmware

**Category:** embedded

## Checklist

- Priorities avoid starvation/inversion
- ISR-safe API variants used from interrupts
- Stack sizes measured, not guessed

## Common pitfalls

- Blocking calls in ISRs
- Priority inversion without mutex inheritance
- Undersized task stacks (overflow)

## Related skills

- `embedded-c`
- `concurrency-patterns`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
