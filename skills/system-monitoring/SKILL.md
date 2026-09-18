---
name: system-monitoring
description: "Monitor host resources: CPU, memory, disk, IO, network, processes; find resource hogs. Use for performance/capacity triage."
---

# System Monitoring

**Category:** devops  ·  **Requires (detect first):** top, htop

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `top`
- `htop`

## Key commands

```bash
top -b -n1 | head -20
df -h
iostat -xz 1 3
```

## Checklist

- Baseline vs current compared
- Saturated resource identified (CPU/mem/IO/net)
- Offending process pinpointed

## Common pitfalls

- Chasing symptoms without a baseline
- Confusing load average with CPU usage

## Related skills

- `performance-profiling`
- `linux-administration`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
