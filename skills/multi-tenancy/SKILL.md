---
name: multi-tenancy
description: "Design multi-tenant systems: isolation (row/schema/db), tenant routing, noisy-neighbor, per-tenant limits. Use for SaaS platforms."
---

# Multi Tenancy

**Category:** patterns

## Common pitfalls

- Cross-tenant data leakage
- Noisy-neighbor resource starvation
- No per-tenant rate limits/quotas

## Related skills

- `scalability-patterns`
- `backend-rate-limiting`
- `security-iam`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
