---
name: security-network
description: "Harden network security: segmentation, firewalls, least-exposure, TLS everywhere, zero trust. Use when designing/reviewing network exposure."
---

# Security Network

**Category:** security

## Checklist

- Only required ports exposed
- Segmentation between tiers
- Encrypted in transit; default-deny

## Common pitfalls

- Flat networks with no segmentation
- Databases exposed publicly
- Default-allow firewall rules

## Related skills

- `networking-fundamentals`
- `security-iam`
- `reverse-proxy-tls`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
