---
name: docker-fundamentals
description: "Build, run and debug Docker images and containers: Dockerfiles, layers, volumes, networks, logs. Use for Dockerfile and container issues. Detect docker first."
---

# Docker Fundamentals

**Category:** devops  ·  **Requires (detect first):** docker

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `docker`

## Key commands

```bash
docker build -t app .
docker run --rm app
docker logs <container>
docker inspect <container>
```

## Checklist

- Small base image; multi-stage build
- Non-root user in container
- Layers ordered for cache efficiency

## Common pitfalls

- Running as root
- Secrets baked into image layers
- COPY . . invalidating cache constantly

## Related skills

- `docker-compose`
- `docker-image-optimization`
- `kubernetes-core`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
