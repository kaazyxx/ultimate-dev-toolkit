---
description: Detect the test framework and run tests for a path.
argument-hint: "[path]"
allowed-tools: Read, Glob, Bash
---

Run tests for the target in $ARGUMENTS using the `testing-strategy` skill.

Detect the real test framework/runner from the project (do not assume). Run the relevant tests, and report pass/fail with the actual output. If tests fail, summarize the failures and offer to debug. Never claim tests passed without having run them.
