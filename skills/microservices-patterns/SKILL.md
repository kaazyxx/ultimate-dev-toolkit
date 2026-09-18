---
name: microservices-patterns
description: "Design microservices: boundaries, communication, resilience (circuit breaker, retry, timeout), saga. Use when splitting or integrating services."
---

# Microservices Patterns

**Category:** devops

## Checklist

- Service boundaries follow domain, not layers
- Timeouts/retries/circuit breakers on calls
- Distributed transactions avoided or saga'd

## Common pitfalls

- Distributed monolith (chatty coupling)
- No timeouts causing cascading failures
- Shared database between services

## Related skills

- `backend-grpc`
- `observability-opentelemetry`
- `message-broker-ops`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
