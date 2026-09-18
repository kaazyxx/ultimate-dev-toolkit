---
description: Safely stash or restore work in progress.
argument-hint: "[save|pop|list] [message]"
allowed-tools: Bash
---

Manage git stashes based on $ARGUMENTS (save/pop/list).

Show the current state first. For save, use a descriptive message. For pop, warn about potential conflicts and stop if the working tree is dirty in a way that could clash. List stashes clearly.
