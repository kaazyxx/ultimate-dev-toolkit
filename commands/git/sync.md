---
description: Fetch, review incoming changes, and update the branch safely.
argument-hint: "[--rebase]"
allowed-tools: Bash
---

Sync the current branch with its upstream using the `git-workflows` skill.

Fetch first and show what is incoming. Choose merge or rebase (rebase if requested in $ARGUMENTS and the branch is unshared). Stop and explain if there are conflicts. Never force-push over shared history without explicit confirmation.
