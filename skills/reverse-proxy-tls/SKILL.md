---
name: reverse-proxy-tls
description: "Set up TLS termination, certificates (Let's Encrypt/ACME), HSTS and modern cipher configs. Use for HTTPS/cert setup."
---

# Reverse Proxy Tls

**Category:** devops  ·  **Requires (detect first):** openssl, certbot

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `openssl`
- `certbot`

## Key commands

```bash
openssl s_client -connect host:443 -servername host
certbot certificates
```

## Checklist

- Auto-renewal configured and tested
- Strong ciphers/TLS1.2+ only
- HSTS and redirect to HTTPS

## Common pitfalls

- Expired certs from no auto-renewal
- Weak ciphers/protocols enabled
- Mixed-content over HTTPS

## Related skills

- `nginx-config`
- `security-web`
- `caddy-traefik`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
