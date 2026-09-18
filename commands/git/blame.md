---
description: Find who/when/why a line or region was last changed.
argument-hint: "<file> [line-range]"
allowed-tools: Bash
---

Investigate authorship/history of the file (and optional line range) in $ARGUMENTS.

Use `git blame` and, for the relevant commits, `git show` to explain why the code changed. Focus on the reasoning behind the change, not just who touched it.
