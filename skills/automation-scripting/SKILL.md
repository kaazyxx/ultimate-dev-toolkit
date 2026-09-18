---
name: automation-scripting
description: "Automate repetitive tasks with scripts (shell/Python/PowerShell): idempotency, error handling, logging, dry-run. Use to eliminate manual toil."
---

# Automation Scripting

**Category:** automation

## Checklist

- Idempotent and re-runnable
- Errors fail loud; dry-run option
- Logged and documented

## Common pitfalls

- Fragile scripts with no error handling
- Non-idempotent side effects
- Destructive actions with no dry-run/confirm

## Related skills

- `shell-bash`
- `shell-powershell`
- `safe-execution`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
