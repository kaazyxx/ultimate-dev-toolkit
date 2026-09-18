---
description: Run mutation testing to assess test quality.
argument-hint: "[path]"
allowed-tools: Read, Bash
---

Run mutation testing for $ARGUMENTS using the `mutation-testing` skill (Stryker/mutmut/PIT). Focus on critical modules, report surviving mutants (weak tests) and suggest stronger assertions. Note it can be slow — scope it.
