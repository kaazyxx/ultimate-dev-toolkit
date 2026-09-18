---
name: web-forms-validation
description: Build accessible forms with client and server validation and good error UX. Use when implementing forms and input validation.
---

# Web Forms Validation

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run test
```

## Checklist

- Validate on the server too, never client-only
- Errors associated with inputs (aria-describedby)
- Disable double-submit

## Common pitfalls

- Trusting client-side validation for security
- Inaccessible error messaging

## Related skills

- `web-accessibility`
- `backend-auth`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
