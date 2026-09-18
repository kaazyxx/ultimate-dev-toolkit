---
name: windows-admin
description: "Administer Windows systems with PowerShell: services, scheduled tasks, registry, WMI/CIM, event logs. Use for Windows server/desktop ops."
---

# Windows Admin

**Category:** devops  ·  **Requires (detect first):** powershell, pwsh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `powershell`
- `pwsh`

## Key commands

```bash
Get-Service | Where-Object Status -eq Running
Get-WinEvent -LogName System -MaxEvents 20
```

## Checklist

- Changes scripted and reversible
- Least privilege; UAC respected
- Registry edits backed up

## Common pitfalls

- Unbacked registry edits
- Silent failures from SilentlyContinue
- Assuming pwsh 7 features in Windows PowerShell 5.1

## Related skills

- `shell-powershell`
- `linux-administration`
- `system-monitoring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
