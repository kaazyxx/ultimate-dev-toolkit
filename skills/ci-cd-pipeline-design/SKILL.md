---
name: ci-cd-pipeline-design
description: "Design fast, reliable CI/CD pipelines regardless of provider: caching, parallelism, gates, artifacts, promotion. Use when designing/improving pipelines."
---

# Ci Cd Pipeline Design

**Category:** devops

## Checklist

- Fast feedback (lint/test) before slow stages
- Deterministic, cacheable builds
- Deploy gated on tests + review

## Common pitfalls

- Flaky tests blocking merges
- No caching (slow, costly runs)
- Building artifacts twice instead of promoting

## Related skills

- `ci-cd-github-actions`
- `pipelines`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
