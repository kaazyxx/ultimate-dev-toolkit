---
description: Identify merged branches and cruft to clean up (with confirmation).
allowed-tools: Bash
---

Suggest git cleanup using the `safe-execution` skill.

List merged branches, stale remotes, and large/untracked artifacts. Present a proposed cleanup and require confirmation before deleting anything. Never delete unmerged branches or force-clean without explicit approval.
