---
description: Check multi-tenant isolation and per-tenant limits.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Review $ARGUMENTS using the `multi-tenancy` skill. Look for cross-tenant data leakage (missing tenant scoping on queries), noisy-neighbor risks, and missing per-tenant quotas/rate limits. Report severity-ranked findings. Read-only.
