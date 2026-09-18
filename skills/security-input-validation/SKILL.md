---
name: security-input-validation
description: "Validate and sanitize all untrusted input: allowlists, schemas, encoding at the right boundary. Use when handling external input."
---

# Security Input Validation

**Category:** security

## Checklist

- Validate against an allowlist/schema
- Encode/escape at the output boundary
- Reject, don't try to sanitize dangerous input silently

## Common pitfalls

- Blocklist filtering that misses variants
- Validating but not encoding on output
- Trusting headers/cookies/hidden fields

## Related skills

- `security-xss`
- `security-sql-injection`
- `web-forms-validation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
