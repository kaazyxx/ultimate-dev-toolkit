---
name: networking-fundamentals
description: "Understand and debug networking: OSI layers, TCP/UDP, IP, DNS, NAT, ports, connectivity troubleshooting. Use for network issues."
---

# Networking Fundamentals

**Category:** networking  ·  **Requires (detect first):** ping, traceroute, ss

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ping`
- `traceroute`
- `ss`

## Key commands

```bash
ping host
traceroute host
ss -tlnp
```

## Checklist

- Layer-by-layer diagnosis (physical up)
- DNS vs connectivity vs firewall isolated
- Ports/routes verified

## Common pitfalls

- Blaming the app for a DNS/firewall issue
- Ignoring MTU/NAT problems
- Confusing 'connection refused' vs 'timeout'

## Related skills

- `http-protocol`
- `dns-management`
- `security-network`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
