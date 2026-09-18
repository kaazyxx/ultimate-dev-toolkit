---
description: "Assess a payment flow's PCI scope and card-data handling."
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Assess the payment flow in $ARGUMENTS using the `fintech-payments`/`security-compliance` skills. Identify where card/PII data flows and whether it (wrongly) touches your systems, check idempotency on charges, and flag float money math. Recommend how to minimize PCI scope. Read-only.
