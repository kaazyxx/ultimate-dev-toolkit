---
name: solidity
description: "Write and audit Solidity smart contracts with a strong security focus: reentrancy, overflow, access control, gas. Use for .sol files. Detect solc/foundry/hardhat first."
---

# Solidity

**Category:** languages  ·  **Requires (detect first):** solc, forge

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `solc`
- `forge`

## Key commands

```bash
forge build
forge test
solc --optimize contract.sol
```

## Checklist

- Checks-Effects-Interactions to prevent reentrancy
- Access control on privileged functions
- No unbounded loops; gas considered
- External calls handled safely

## Common pitfalls

- Reentrancy on external calls
- Missing access control (anyone can call)
- Unchecked arithmetic / oracle manipulation

## Related skills

- `security-audit`
- `security-crypto`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
