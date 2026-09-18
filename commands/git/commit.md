---
description: Craft a clear commit message and commit staged changes (with confirmation).
argument-hint: "[message]"
allowed-tools: Bash, Read
---

Help commit using the `git-workflows` skill.

Inspect the staged diff. If nothing is staged, show status and ask what to stage (do not stage everything blindly). Draft a concise, conventional commit message (or use $ARGUMENTS if provided). Show it and the file list, then commit. Never commit detected secrets; stop and warn instead.
