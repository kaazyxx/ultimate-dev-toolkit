---
name: web3-ethers
description: "Interact with EVM chains from JS/TS (ethers.js/viem/web3.js): providers, signers, contracts, events, gas. Use for dApp frontends/backends."
---

# Web3 Ethers

**Category:** web3  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm test
```

## Checklist

- Never expose private keys client-side
- Handle chain/reorg and tx failures
- Validate addresses and decimals (wei/gwei)

## Common pitfalls

- Private keys in frontend code
- Assuming tx success without waiting for confirmations
- Float math on token amounts (use BigInt)

## Related skills

- `solidity`
- `wallet-integration`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
