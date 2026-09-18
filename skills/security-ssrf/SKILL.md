---
name: security-ssrf
description: "Prevent server-side request forgery: URL allowlists, blocking internal ranges/metadata endpoints, no user-controlled fetch targets. Use for outbound-request features."
---

# Security Ssrf

**Category:** security

## Checklist

- Outbound targets allowlisted
- Internal/metadata IP ranges blocked
- Redirects validated

## Common pitfalls

- Fetching user-supplied URLs unchecked
- Missing cloud metadata endpoint protection
- Following redirects to internal hosts

## Related skills

- `security-web`
- `security-input-validation`
- `cloud-aws`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
