---
name: silent-failure-detection
description: "Find and fix silent failures: swallowed errors, bad fallbacks, missing propagation, ignored return codes. Use when reviewing for hidden failures."
---

# Silent Failure Detection

**Category:** quality  ·  **Requires (detect first):** git

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Key commands

```bash
rg -n 'except:\s*pass'
```

## Checklist

- No empty catch/except
- Fallbacks don't mask real failures
- Return/error codes checked

## Common pitfalls

- except: pass hiding bugs
- Default values masking a failed call
- Ignoring a function's error return

## Related skills

- `error-handling`
- `code-review-playbook`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
