---
name: security-api
description: "Secure APIs: authn/authz per endpoint, rate limiting, input validation, object-level authorization, versioned deprecation. Use when securing APIs."
---

# Security Api

**Category:** security

## Checklist

- AuthZ enforced per object/endpoint
- Rate limiting and quotas
- Schemas validate all inputs

## Common pitfalls

- Broken object-level authorization (BOLA/IDOR)
- Mass assignment
- No rate limiting

## Related skills

- `backend-rest-api`
- `backend-auth`
- `security-input-validation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
