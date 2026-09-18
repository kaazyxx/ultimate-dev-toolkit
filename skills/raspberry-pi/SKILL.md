---
name: raspberry-pi
description: "Build on Raspberry Pi / Linux SBCs: GPIO, I2C/SPI, camera, systemd services, headless setup. Use for Pi/SBC projects."
---

# Raspberry Pi

**Category:** embedded  ·  **Requires (detect first):** python, raspi-config

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `raspi-config`

## Key commands

```bash
python gpio.py
systemctl status myservice
```

## Checklist

- GPIO access permissions correct
- Services via systemd (auto-restart)
- SD-card wear minimized (log to RAM/rotate)

## Common pitfalls

- SD-card corruption from unclean shutdown
- Blocking GPIO polling instead of interrupts
- No watchdog for headless reliability

## Related skills

- `linux-administration`
- `python`
- `mqtt-iot`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
