---
name: test-parallelization
description: "Speed up test suites: sharding, parallelism, isolation, caching, selective testing. Use when tests are slow."
---

# Test Parallelization

**Category:** qa

## Common pitfalls

- Shared state breaking under parallelism
- No isolation between workers
- Rebuilding instead of caching

## Related skills

- `monorepo-tools`
- `ci-cd-pipeline-design`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
