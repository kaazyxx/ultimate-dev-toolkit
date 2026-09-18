---
name: defi-patterns
description: "Reason about DeFi mechanisms and their risks: AMMs, lending, oracles, flash loans, MEV. Use for DeFi contract/design review. Defensive/educational only."
---

# Defi Patterns

**Category:** web3

## Checklist

- Oracle manipulation resistance (TWAP)
- Reentrancy and CEI on external calls
- Economic invariants hold under attack

## Common pitfalls

- Spot-price oracles (flash-loan manipulable)
- Unprotected external calls
- Ignoring MEV/sandwich exposure

## Related skills

- `solidity`
- `security-crypto`
- `smart-contract-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
