---
name: fintech-payments
description: "Build payment/fintech flows: PCI scope, idempotency, reconciliation, webhooks, ledgers, currency. Use for payments integration. Never handle raw card data yourself."
---

# Fintech Payments

**Category:** verticals

## Common pitfalls

- Storing raw card data (PCI scope explosion)
- Non-idempotent charge endpoints (double charges)
- Float math on money (use integer minor units)

## Related skills

- `idempotency-patterns`
- `security-compliance`
- `db-transactions`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
