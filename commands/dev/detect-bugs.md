---
description: Scan code for likely bugs, silent failures and risky patterns.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Scan the code in $ARGUMENTS for likely defects using the `silent-failure-detection` and `debugging` skills.

Look for swallowed errors, missing await/error handling, off-by-one, unchecked nulls, and resource leaks. Report each with file:line, why it is risky, and a concrete failure scenario. Rank by likelihood/impact; avoid noise.
