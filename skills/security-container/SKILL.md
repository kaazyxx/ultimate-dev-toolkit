---
name: security-container
description: "Secure containers: non-root, minimal images, dropped capabilities, read-only FS, image scanning. Use when hardening container workloads."
---

# Security Container

**Category:** security  ·  **Requires (detect first):** trivy, docker

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `trivy`
- `docker`

## Key commands

```bash
trivy image app
docker scout cves app
```

## Checklist

- Non-root user; dropped capabilities
- Minimal/distroless base; scanned
- Read-only root FS where possible

## Common pitfalls

- Running as root with full capabilities
- Vulnerable base images
- Mounting the Docker socket into containers

## Related skills

- `docker-image-optimization`
- `kubernetes-core`
- `security-supply-chain`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
