---
description: "Create, list or switch branches following the project's convention."
argument-hint: "[name]"
allowed-tools: Bash
---

Manage branches using the `git-workflow-branching` skill.

With no argument, list branches and show the current one. With a name in $ARGUMENTS, create/switch following the repo's naming convention (infer it from existing branches). Warn before leaving uncommitted changes behind.
