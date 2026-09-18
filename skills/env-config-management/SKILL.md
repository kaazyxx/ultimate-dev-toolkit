---
name: env-config-management
description: "Manage configuration and env vars across environments: 12-factor, .env, validation at boot, no secrets in code. Use for app configuration."
---

# Env Config Management

**Category:** tooling

## Checklist

- Config from env; validated at startup
- Secrets never committed (.env.example only)
- Per-environment overrides explicit

## Common pitfalls

- Committing real .env files
- Config read scattered/unvalidated
- Different behavior from undocumented env vars

## Related skills

- `security-secrets`
- `deployment-strategies`
- `project-scaffolding`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
