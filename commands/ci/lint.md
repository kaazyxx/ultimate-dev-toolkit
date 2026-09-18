---
description: Validate a CI configuration file for correctness and safety.
argument-hint: "[file]"
allowed-tools: Read, Bash
---

Validate the CI config in $ARGUMENTS using the relevant CI skill. Lint the syntax, and review for security issues (untrusted-PR execution, secret exposure to forks, unpinned actions) and slow/uncached steps. Report fixes.
