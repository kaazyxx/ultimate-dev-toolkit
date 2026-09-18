---
name: security-xss
description: "Prevent cross-site scripting: contextual output encoding, CSP, safe templating, avoiding innerHTML. Use when rendering user content."
---

# Security Xss

**Category:** security

## Checklist

- Output encoded per context (HTML/attr/JS/URL)
- CSP configured
- Framework auto-escaping not bypassed

## Common pitfalls

- dangerouslySetInnerHTML/innerHTML with user data
- Disabling framework escaping
- No CSP as defense in depth

## Related skills

- `security-web`
- `security-input-validation`
- `security-headers`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
