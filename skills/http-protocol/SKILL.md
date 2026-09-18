---
name: http-protocol
description: "Understand HTTP deeply: methods, status codes, headers, caching, cookies, HTTP/2-3, keep-alive. Use for HTTP-level debugging/design."
---

# Http Protocol

**Category:** networking  ·  **Requires (detect first):** curl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `curl`

## Key commands

```bash
curl -v https://example.com
curl -sI https://example.com
```

## Checklist

- Correct methods/status codes
- Caching headers appropriate
- Cookies scoped/secured

## Common pitfalls

- Wrong status codes (200 for errors)
- Cache headers causing stale/no caching
- Insecure cookie flags

## Related skills

- `backend-rest-api`
- `web-performance`
- `security-headers`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
