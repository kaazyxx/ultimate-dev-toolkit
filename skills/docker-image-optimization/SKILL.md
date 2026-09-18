---
name: docker-image-optimization
description: "Shrink and harden container images: multi-stage builds, layer caching, distroless, scanning. Use when images are large or insecure."
---

# Docker Image Optimization

**Category:** devops  ·  **Requires (detect first):** docker, dive, trivy

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `docker`
- `dive`
- `trivy`

## Key commands

```bash
docker build -t app .
dive app
trivy image app
```

## Checklist

- Multi-stage build discards build deps
- Distroless/slim runtime base
- Image scanned for CVEs

## Common pitfalls

- Shipping compilers/build tools in the runtime image
- Not pinning base image digests
- Ignoring scanner findings

## Related skills

- `docker-fundamentals`
- `security-supply-chain`
- `security-audit`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
