---
name: nginx-config
description: "Configure and debug NGINX: reverse proxy, TLS, caching, rate limiting, load balancing. Use for nginx.conf. Detect nginx first."
---

# Nginx Config

**Category:** devops  ·  **Requires (detect first):** nginx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `nginx`

## Key commands

```bash
nginx -t
nginx -s reload
```

## Checklist

- Config tested (nginx -t) before reload
- TLS and security headers set
- Upstream timeouts/keepalive tuned

## Common pitfalls

- Reloading with an invalid config (downtime)
- Missing proxy timeouts causing hangs
- Serving stale cache without purge

## Related skills

- `load-balancing`
- `web-performance`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
