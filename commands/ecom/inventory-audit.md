---
description: Audit inventory/checkout for oversell and tampering risks.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Audit the commerce flow in $ARGUMENTS using the `ecommerce-platform` skill. Look for inventory race conditions (oversell), client-trusted prices/carts, and non-idempotent order placement. Report risks with fixes. Read-only.
