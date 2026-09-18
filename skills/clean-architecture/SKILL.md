---
name: clean-architecture
description: "Apply clean/onion architecture: dependency inversion, domain independence from frameworks, testable boundaries. Use when isolating business logic."
---

# Clean Architecture

**Category:** architecture

## Checklist

- Domain independent of frameworks/IO
- Dependencies point inward
- Boundaries are testable interfaces

## Common pitfalls

- Framework types leaking into the domain
- Over-layering a simple app
- Anemic domain with logic in services

## Related skills

- `hexagonal-architecture`
- `domain-driven-design`
- `architecture-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
