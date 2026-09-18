---
description: Scan an agentic/RAG system for prompt-injection exposure.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Scan $ARGUMENTS using the `prompt-injection-defense` skill. Find places where fetched/tool content is treated as instructions, trusted and untrusted context are mixed, or tools run without authorization. Report exposures and mitigations. Read-only.
