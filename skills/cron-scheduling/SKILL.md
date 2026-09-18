---
name: cron-scheduling
description: "Schedule reliable recurring jobs with cron/systemd timers/Task Scheduler: locking, logging, alerting on failure. Use for scheduled tasks."
---

# Cron Scheduling

**Category:** devops  ·  **Requires (detect first):** crontab

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `crontab`

## Key commands

```bash
crontab -l
systemctl list-timers
```

## Checklist

- Overlap prevented (locking)
- Output logged; failures alert
- Timezone/DST considered

## Common pitfalls

- Overlapping runs corrupting state
- Silent failures (no alerting)
- Assuming server timezone

## Related skills

- `linux-administration`
- `windows-admin`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
