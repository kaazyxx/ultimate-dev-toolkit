---
description: Find the commit that introduced a bug via bisection.
argument-hint: "<good-ref> <bad-ref>"
allowed-tools: Bash
---

Guide a git bisect between the good and bad refs in $ARGUMENTS using the `debugging` skill.

Establish a reliable reproduction/test first. Drive `git bisect` (or script it with `git bisect run`) and identify the offending commit. Explain what that commit changed and end with `git bisect reset`.
