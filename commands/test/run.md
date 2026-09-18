---
description: Detect the framework and run the test suite.
argument-hint: "[path-or-pattern]"
allowed-tools: Bash, Read
---

Run the tests for $ARGUMENTS using the `testing-strategy` skill. Detect the real runner (jest/vitest/pytest/go test/cargo test/etc.) and run it. Report pass/fail with real output; if failing, summarize and offer to debug. Never claim success without running.
