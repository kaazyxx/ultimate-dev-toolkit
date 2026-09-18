---
name: synthetic-data
description: "Generate synthetic/anonymized data (Faker/SDV): privacy, statistical fidelity, testing, no real PII. Use for test data and privacy."
---

# Synthetic Data

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Common pitfalls

- Leaking real PII into 'synthetic' data
- Poor statistical fidelity for ML
- Unrealistic edge cases missing

## Related skills

- `data-privacy`
- `testing-strategy`
- `db-seed`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
