---
description: Preview and apply a bulk rename by pattern (with confirmation).
argument-hint: "<pattern> <replacement> [path]"
allowed-tools: Bash, Glob
---

Plan a bulk rename per $ARGUMENTS using the `file-operations` and `safe-execution` skills. First show the full before -> after preview and check for collisions/overwrites. Only apply after explicit confirmation. Never overwrite an existing target silently.
