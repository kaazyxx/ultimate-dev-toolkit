---
name: service-discovery
description: "Discover and route to services: registries (Consul/etcd), DNS, health, client vs server-side LB. Use for dynamic service topology."
---

# Service Discovery

**Category:** patterns

## Common pitfalls

- Stale registry entries routing to dead nodes
- No health-check integration
- Hardcoded endpoints

## Related skills

- `microservices-patterns`
- `load-balancing`
- `kubernetes-core`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
