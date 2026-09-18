---
name: event-driven-architecture
description: "Design event-driven systems: events, pub/sub, choreography vs orchestration, eventual consistency. Use for decoupled/async systems."
---

# Event Driven Architecture

**Category:** architecture

## Checklist

- Events are facts (past tense), immutable
- Idempotent consumers
- Eventual consistency handled explicitly

## Common pitfalls

- Hidden coupling via event schemas
- No idempotency (duplicate processing)
- Debugging opacity across async flows

## Related skills

- `message-broker-ops`
- `cqrs-event-sourcing`
- `microservices-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
