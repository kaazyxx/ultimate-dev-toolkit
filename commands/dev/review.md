---
description: Review code for correctness, security, performance and clarity.
argument-hint: "[path-or-diff]"
allowed-tools: Read, Grep, Glob, Bash
---

Review the code in $ARGUMENTS (a path, or the current git diff if none) using the `code-review-playbook` skill.

Check correctness and edge cases first, then security, then performance, then clarity. Verify tests cover the change. Give prioritized, actionable feedback separated into blocking issues and suggestions. Consider delegating to the `code-reviewer` agent for a deeper pass.
