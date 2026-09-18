---
name: cqrs-event-sourcing
description: "Apply CQRS and event sourcing where justified: separate read/write models, event log as source of truth. Use for audit-heavy/complex-write domains."
---

# Cqrs Event Sourcing

**Category:** architecture

## Checklist

- Complexity justified by real needs
- Event schema versioning planned
- Read models rebuildable from events

## Common pitfalls

- Adopting ES for simple CRUD
- No event versioning strategy
- Snapshotting ignored (slow replays)

## Related skills

- `event-driven-architecture`
- `domain-driven-design`
- `db-transactions`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
