---
name: security-headers
description: "Set defensive HTTP security headers: CSP, HSTS, X-Content-Type-Options, frame options, referrer policy. Use to harden web responses."
---

# Security Headers

**Category:** security  ·  **Requires (detect first):** curl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `curl`

## Key commands

```bash
curl -sI https://example.com | rg -i 'content-security|strict-transport|x-frame'
```

## Checklist

- CSP restricts sources
- HSTS enabled
- Framing/MIME-sniffing protections set

## Common pitfalls

- Overly permissive CSP (unsafe-inline)
- Missing HSTS
- Headers set on some routes but not others

## Related skills

- `security-web`
- `security-xss`
- `reverse-proxy-tls`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
