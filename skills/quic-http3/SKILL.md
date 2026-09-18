---
name: quic-http3
description: "Understand and adopt QUIC/HTTP-3: streams, 0-RTT, head-of-line avoidance, migration, tradeoffs. Use for modern transport decisions."
---

# Quic Http3

**Category:** networking  ·  **Requires (detect first):** curl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `curl`

## Key commands

```bash
curl --http3 -sI https://example.com
```

## Common pitfalls

- Assuming universal HTTP/3 support
- 0-RTT replay risks
- Middlebox/UDP blocking

## Related skills

- `http-protocol`
- `networking-fundamentals`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
