---
name: security-csrf
description: "Prevent cross-site request forgery: anti-CSRF tokens, SameSite cookies, verifying origin. Use for state-changing endpoints with cookie auth."
---

# Security Csrf

**Category:** security

## Checklist

- CSRF tokens on state-changing requests
- SameSite cookies set
- Origin/Referer validated where relevant

## Common pitfalls

- Relying on cookies without CSRF protection
- GET requests that change state

## Related skills

- `security-web`
- `backend-auth`
- `security-headers`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
