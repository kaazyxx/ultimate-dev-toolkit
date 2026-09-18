---
name: embedded-c
description: "Write firmware in C for MCUs: registers, memory-mapped IO, interrupts, DMA, no-heap patterns, real-time constraints. Use for bare-metal/RTOS C."
---

# Embedded C

**Category:** embedded  ·  **Requires (detect first):** gcc, arm-none-eabi-gcc

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gcc`
- `arm-none-eabi-gcc`

## Key commands

```bash
arm-none-eabi-gcc -Wall -O2 -c main.c
```

## Checklist

- volatile on hardware registers/ISR-shared data
- Static allocation; bounded stack
- Timing/real-time deadlines met

## Common pitfalls

- Missing volatile on registers (optimized away)
- Stack overflow from deep calls/large locals
- Race conditions with interrupts

## Related skills

- `c`
- `rtos-firmware`
- `arduino`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
