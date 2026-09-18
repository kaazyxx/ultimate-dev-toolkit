---
description: Find duplicate files by content hash (report only).
argument-hint: "[path]"
allowed-tools: Bash, Read
---

Find duplicate files under $ARGUMENTS by hashing contents. Group duplicates and report wasted space. Only report; never delete without explicit per-group confirmation from the user.
