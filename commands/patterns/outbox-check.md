---
description: Check event publishing for the transactional-outbox pattern.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Review $ARGUMENTS using the `transactional-outbox` skill. Detect dual-write bugs (DB write + broker publish not atomic), confirm an outbox table + relay + consumer dedup exist, and flag unbounded outbox growth. Report fixes. Read-only.
