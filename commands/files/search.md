---
description: Search file contents or names across the project.
argument-hint: "<query> [path]"
allowed-tools: Grep, Glob, Read
---

Search for $ARGUMENTS using the `code-search` skill. Prefer ripgrep/structural search, scope by path/type, and present results as file:line with brief context. Distinguish real matches from comments/strings when it matters.
