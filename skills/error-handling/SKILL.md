---
name: error-handling
description: "Handle errors robustly: fail loud, propagate context, no silent swallowing, typed errors, retries where safe. Use whenever code can fail."
---

# Error Handling

**Category:** quality

## Checklist

- Errors propagated with context
- No empty catch/ignored errors
- Recoverable vs fatal distinguished

## Common pitfalls

- Swallowing exceptions silently
- Catch-all that hides bugs
- Losing the original error/context

## Related skills

- `silent-failure-detection`
- `logging-best-practices`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
