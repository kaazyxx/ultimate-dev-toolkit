---
description: Run smart-contract tests (unit/fuzz/invariant) with gas report.
argument-hint: "[pattern]"
allowed-tools: Bash
---

Run contract tests for $ARGUMENTS using the `smart-contract-testing` skill (`forge test -vvv` or `npx hardhat test`). Include fuzz/invariant tests and a gas report if available. Report pass/fail with real output; never claim green without running.
