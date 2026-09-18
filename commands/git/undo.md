---
description: Safely undo the last commit/change without losing work.
argument-hint: "[soft|mixed|last-commit]"
allowed-tools: Bash
---

Help undo recent git actions safely using the `safe-execution` skill.

Show exactly what will change first. Prefer non-destructive options (revert, soft reset) that preserve work. Only use `reset --hard` if the user explicitly confirms and you have shown what would be lost. Remind them `git reflog` can recover commits.
