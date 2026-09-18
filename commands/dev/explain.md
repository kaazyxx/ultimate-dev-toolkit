---
description: Explain how a file, function or module works.
argument-hint: "<file> [symbol]"
allowed-tools: Read, Grep, Glob
---

Explain the code the user points to in $ARGUMENTS (a file, optionally a specific symbol).

Read it in context (callers/callees where useful). Explain what it does, the data flow, notable edge cases, and any surprising or risky parts. Prefer plain language and a small annotated example over restating the code line by line.
