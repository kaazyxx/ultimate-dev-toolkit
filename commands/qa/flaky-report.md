---
description: Find and triage flaky tests, propose root-cause fixes.
argument-hint: "[test-path|junit-dir]"
allowed-tools: Read, Grep, Glob, Bash
---

Analyze $ARGUMENTS using the `flaky-test-management` skill. Identify intermittently-failing tests, classify the cause (order dependence, shared state, time/network nondeterminism), and propose real fixes over blanket retries. Report a ranked list. Read-only analysis.
