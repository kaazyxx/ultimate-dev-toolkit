---
name: wallet-integration
description: "Integrate wallets (MetaMask/WalletConnect/RainbowKit): connect flow, chain switching, signing, UX. Use for dApp wallet flows."
---

# Wallet Integration

**Category:** web3  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Checklist

- Handle wrong-network + prompt switch
- Never auto-sign; show what's signed
- Disconnect/account-change handled

## Common pitfalls

- Assuming a single chain
- Blind-signing UX (phishing risk)
- Not handling rejected requests

## Related skills

- `web3-ethers`
- `web-frontend-react`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
