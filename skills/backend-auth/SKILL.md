---
name: backend-auth
description: "Implement authentication/authorization: sessions vs JWT, OAuth/OIDC, password hashing, RBAC. Use for login/auth features."
---

# Backend Auth

**Category:** web

## Checklist

- Passwords hashed (argon2/bcrypt), never stored plain
- Tokens short-lived; refresh rotation
- Authorization checked on every protected action

## Common pitfalls

- JWT in localStorage (XSS exposure)
- Missing authorization (only authentication)
- Weak or absent password hashing

## Related skills

- `security-web`
- `security-secrets`
- `backend-rest-api`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
