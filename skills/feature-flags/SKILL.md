---
name: feature-flags
description: Use feature flags for progressive delivery, kill switches and experiments. Use when decoupling deploy from release.
---

# Feature Flags

**Category:** devops

## Checklist

- Flags have owners and expiry
- Kill switch for risky features
- Flag state defaults safe

## Common pitfalls

- Stale flags accumulating as tech debt
- Flag logic scattered/uncontrolled
- No default when the flag service is down

## Related skills

- `deployment-strategies`
- `ab-testing`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
