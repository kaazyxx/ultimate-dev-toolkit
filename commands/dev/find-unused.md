---
description: Find dead code, unused deps and duplication.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Find unused code and dependencies in $ARGUMENTS using the `refactor-dead-code` skill.

Run the ecosystem's tools if present (knip/ts-prune/depcheck/vulture). Confirm items are truly unused (check dynamic/reflection usage) before recommending removal. Present findings; do not delete without confirmation.
