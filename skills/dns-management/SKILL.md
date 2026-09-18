---
name: dns-management
description: "Manage and debug DNS: record types, TTLs, propagation, resolvers, DNSSEC. Use for DNS setup/troubleshooting."
---

# Dns Management

**Category:** networking  ·  **Requires (detect first):** dig, nslookup

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dig`
- `nslookup`

## Key commands

```bash
dig +short example.com
dig example.com MX
```

## Checklist

- Record types correct (A/AAAA/CNAME/MX/TXT)
- TTLs sized for change frequency
- Propagation understood

## Common pitfalls

- Long TTLs slowing cutover
- CNAME at the zone apex
- Assuming instant propagation

## Related skills

- `networking-fundamentals`
- `reverse-proxy-tls`
- `cloud-networking`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
