---
description: Show and explain a diff between refs or files.
argument-hint: "[ref-or-file] [ref]"
allowed-tools: Bash
---

Show and explain a git diff for the refs/paths in $ARGUMENTS (default: working tree vs HEAD).

Run the appropriate `git diff` and summarize what changed and why it matters, grouped by file/concern, not line-by-line noise.
