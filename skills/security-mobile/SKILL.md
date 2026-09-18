---
name: security-mobile
description: "Secure mobile apps: secure storage, cert pinning, no secrets in binaries, platform permissions. Use when securing iOS/Android apps."
---

# Security Mobile

**Category:** security

## Checklist

- Secrets not hardcoded in the app
- Sensitive data in secure storage (Keychain/Keystore)
- TLS with pinning where appropriate

## Common pitfalls

- API keys hardcoded in the binary
- Sensitive data in plaintext prefs
- Trusting client-side checks

## Related skills

- `mobile-ios`
- `mobile-android`
- `security-api`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
