---
name: api-gateway
description: "Design API gateways: routing, auth, rate limiting, transformation, aggregation. Use when fronting multiple services/APIs."
---

# Api Gateway

**Category:** networking

## Checklist

- Auth/rate limiting centralized
- Routing/versioning clear
- No business logic in the gateway

## Common pitfalls

- Gateway becoming a monolith of logic
- Single point of failure without HA
- Inconsistent auth across routes

## Related skills

- `backend-rate-limiting`
- `microservices-patterns`
- `load-balancing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
