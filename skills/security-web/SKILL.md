---
name: security-web
description: "Defend web apps against OWASP Top 10: injection, XSS, broken auth/access control, SSRF, misconfig. Use when securing web endpoints."
---

# Security Web

**Category:** security

## Checklist

- Input validated/encoded at boundaries
- Access control enforced server-side per request
- Security headers and TLS in place

## Common pitfalls

- Trusting client-side validation
- IDOR from missing per-object authorization
- Reflecting unsanitized input (XSS)

## Related skills

- `security-xss`
- `security-sql-injection`
- `backend-auth`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
