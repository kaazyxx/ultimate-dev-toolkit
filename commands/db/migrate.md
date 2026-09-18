---
description: Plan or review a schema migration for safety and reversibility.
argument-hint: "[migration-file]"
allowed-tools: Read, Bash
---

Review or plan the migration in $ARGUMENTS using the `db-migrations` skill. Check it is reversible/backward-compatible (expand-contract), and that large-table changes won't cause long locks. Flag destructive steps and require a backup + confirmation before running anything destructive.
