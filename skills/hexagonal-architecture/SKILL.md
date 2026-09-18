---
name: hexagonal-architecture
description: "Apply ports-and-adapters (hexagonal) architecture: core logic behind ports, adapters for IO. Use to isolate and test core logic."
---

# Hexagonal Architecture

**Category:** architecture

## Checklist

- Core depends on ports, not adapters
- Adapters swappable (DB, HTTP, queue)
- Core testable without infrastructure

## Common pitfalls

- Adapters bleeding into the core
- Over-engineering tiny apps

## Related skills

- `clean-architecture`
- `domain-driven-design`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
