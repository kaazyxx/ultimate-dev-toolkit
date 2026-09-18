---
name: ballerina
description: "Write Ballerina: language for integration/APIs with built-in network primitives. Use for .bal files. Detect bal first."
---

# Ballerina

**Category:** languages  ·  **Requires (detect first):** bal

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `bal`

## Key commands

```bash
bal build
bal test
bal run
```

## Common pitfalls

- Ignoring built-in resilience (retry/circuit-breaker)
- Blocking in async network flows

## Related skills

- `backend-rest-api`
- `api-design`
- `go`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
