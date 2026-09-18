---
description: Fix a described bug end-to-end with a regression test.
argument-hint: "<bug description>"
allowed-tools: Read, Grep, Glob, Edit, Bash
---

Fix the bug in $ARGUMENTS using the `debugging` and `testing-strategy` skills. First reproduce it (ideally as a failing test), find the root cause, apply the minimal fix, and confirm the test now passes plus the suite is green. Report exactly what you verified.
