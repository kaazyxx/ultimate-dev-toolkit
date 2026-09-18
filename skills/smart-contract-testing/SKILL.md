---
name: smart-contract-testing
description: "Test smart contracts (Foundry/Hardhat): unit, fuzz, invariant, fork tests, gas snapshots. Use for contract test suites."
---

# Smart Contract Testing

**Category:** web3  ·  **Requires (detect first):** forge

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `forge`

## Key commands

```bash
forge test -vvv
forge test --gas-report
forge coverage
```

## Checklist

- Fuzz + invariant tests on critical logic
- Fork tests against mainnet state
- Reentrancy/access edge cases covered

## Common pitfalls

- Only happy-path unit tests
- No fuzzing of arithmetic/edge inputs
- Ignoring gas regressions

## Related skills

- `solidity`
- `security-audit`
- `fuzzing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
