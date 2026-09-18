---
description: Compile smart contracts and report size/warnings.
argument-hint: "[dir]"
allowed-tools: Bash, Read
---

Compile the contracts in $ARGUMENTS using the `solidity` skill. Detect Foundry (`forge build`) or Hardhat (`npx hardhat compile`). Report compiler warnings, contract sizes (against the 24KB limit) and any optimizer notes. Read-only build.
