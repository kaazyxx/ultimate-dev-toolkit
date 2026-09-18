---
description: Audit service integrations for timeouts, retries and breakers.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Audit the integrations in $ARGUMENTS using the `resilience-patterns` skill. Check every outbound call has a timeout, retries use backoff+jitter, circuit breakers/bulkheads protect shared resources, and fallbacks exist. Report gaps by risk. Read-only.
