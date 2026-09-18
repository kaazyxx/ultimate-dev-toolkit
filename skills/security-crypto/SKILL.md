---
name: security-crypto
description: "Use cryptography correctly: standard algorithms, key management, hashing vs encryption, no homegrown crypto. Use when handling crypto/hashing."
---

# Security Crypto

**Category:** security

## Checklist

- Vetted libraries, not custom crypto
- Passwords hashed with argon2/bcrypt/scrypt
- Keys managed/rotated; IVs/nonces unique

## Common pitfalls

- Rolling your own crypto
- MD5/SHA1 or unsalted hashes for passwords
- Reusing nonces/IVs

## Related skills

- `security-secrets`
- `backend-auth`
- `reverse-proxy-tls`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
