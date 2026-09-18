---
name: docker-compose
description: "Define and run multi-container apps with Docker Compose: services, networks, volumes, env. Use for compose.yaml/docker-compose.yml."
---

# Docker Compose

**Category:** devops  ·  **Requires (detect first):** docker

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `docker`

## Key commands

```bash
docker compose up -d
docker compose logs -f
docker compose down
```

## Checklist

- Healthchecks and depends_on conditions
- Named volumes for persistence
- Env via .env, not committed secrets

## Common pitfalls

- depends_on not waiting for readiness
- Bind-mounting over needed container files
- Committing secrets in compose files

## Related skills

- `docker-fundamentals`
- `backend-node`
- `db-postgres`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
