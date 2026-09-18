---
name: contract-testing
description: "Verify service contracts (Pact/consumer-driven): prevent breaking API changes between producer and consumer. Use for service integrations."
---

# Contract Testing

**Category:** testing

## Checklist

- Consumer expectations captured as contracts
- Provider verified against contracts in CI
- Breaking changes caught before deploy

## Common pitfalls

- Integration breakage found only in prod
- Contracts not run in CI
- Over-specifying implementation details

## Related skills

- `backend-rest-api`
- `api-openapi`
- `microservices-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
