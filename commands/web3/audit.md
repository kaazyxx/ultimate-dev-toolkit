---
description: Defensive review of a smart contract for common vulnerabilities.
argument-hint: "<file>"
allowed-tools: Read, Grep, Glob, Bash
---

Do a defensive security review of the contract in $ARGUMENTS using the `defi-patterns`/`security-audit` skills (delegate to the `solidity-auditor` agent for depth). Check reentrancy (CEI), access control, oracle manipulation, arithmetic and external-call safety. Report severity-ranked findings with fixes. Defensive only.
