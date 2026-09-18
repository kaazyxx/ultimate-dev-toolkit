---
name: arduino
description: "Program Arduino/microcontrollers (C++): setup/loop, GPIO, interrupts, timers, serial, memory limits. Use for .ino/embedded C++ on AVR/ESP. Detect the toolchain first."
---

# Arduino

**Category:** embedded  ·  **Requires (detect first):** arduino-cli

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `arduino-cli`

## Key commands

```bash
arduino-cli compile --fqbn arduino:avr:uno .
arduino-cli upload -p COM3
```

## Checklist

- Non-blocking loop (no long delay())
- ISRs short; volatile for shared vars
- RAM/flash budget respected

## Common pitfalls

- delay() blocking the loop
- Heavy work / Serial in ISRs
- Dynamic allocation fragmenting tiny RAM

## Related skills

- `embedded-c`
- `mqtt-iot`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
