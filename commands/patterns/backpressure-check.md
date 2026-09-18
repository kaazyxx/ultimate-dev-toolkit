---
description: Check a pipeline for backpressure and load shedding.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Review $ARGUMENTS using the `backpressure-flow-control` skill. Find unbounded queues, missing load shedding under overload, and retry storms that amplify failure. Recommend bounded queues, timeouts and shedding. Read-only.
