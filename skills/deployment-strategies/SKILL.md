---
name: deployment-strategies
description: "Deploy safely: blue-green, canary, rolling, feature flags, and fast rollback. Use when planning a release/rollout."
---

# Deployment Strategies

**Category:** devops

## Checklist

- Rollback path defined and tested
- Progressive rollout with health checks
- Schema changes backward-compatible

## Common pitfalls

- Big-bang deploys with no rollback
- Coupling deploy to irreversible migration
- No health-based automatic rollback

## Related skills

- `db-migrations`
- `feature-flags`
- `sre-slo`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
