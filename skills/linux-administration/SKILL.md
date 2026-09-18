---
name: linux-administration
description: "Administer Linux servers: systemd, users/permissions, packages, cron, disk/process management. Use for server ops on Linux."
---

# Linux Administration

**Category:** devops  ·  **Requires (detect first):** systemctl, journalctl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `systemctl`
- `journalctl`

## Key commands

```bash
systemctl status <svc>
journalctl -u <svc> -e
df -h && free -m
```

## Checklist

- Services managed via systemd
- Least-privilege users; no needless root
- Disk/inode and log rotation monitored

## Common pitfalls

- Running everything as root
- Filling disk with unrotated logs
- Editing config with no backup

## Related skills

- `iac-ansible`
- `shell-bash`
- `system-monitoring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
