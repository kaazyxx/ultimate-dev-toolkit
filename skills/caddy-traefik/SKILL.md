---
name: caddy-traefik
description: Configure Caddy or Traefik as auto-TLS reverse proxies/ingress. Use for Caddyfile/Traefik config.
---

# Caddy Traefik

**Category:** devops  ·  **Requires (detect first):** caddy

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `caddy`

## Key commands

```bash
caddy validate --config Caddyfile
caddy fmt Caddyfile
```

## Checklist

- Automatic HTTPS configured
- Routing rules explicit
- Rate limits/security middleware applied

## Common pitfalls

- Wildcard routes catching unintended traffic
- Rate limits on the wrong layer

## Related skills

- `nginx-config`
- `load-balancing`
- `kubernetes-core`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
