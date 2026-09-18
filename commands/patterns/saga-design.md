---
description: Design a distributed transaction as a saga with compensations.
argument-hint: "<flow-description>"
allowed-tools: Read, Grep, Glob
---

Design a saga for $ARGUMENTS using the `saga-orchestration` skill. Choose orchestration vs choreography, define each step's compensating action, and ensure every step is idempotent and the saga state survives crashes. Output the step/compensation map.
