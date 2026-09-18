---
description: Generate meaningful tests for a file or function.
argument-hint: "<file> [symbol]"
allowed-tools: Read, Grep, Write, Bash
---

Generate tests for $ARGUMENTS using the `testing-strategy` and `test-engineer` guidance. Match the project's test framework and style. Cover the happy path, edge cases and failure modes; assert behavior, not implementation. Run the new tests and confirm they pass.
