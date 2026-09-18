---
description: Scan the codebase for TODO/FIXME/HACK and triage them.
argument-hint: "[path]"
allowed-tools: Grep, Glob, Read
---

Scan $ARGUMENTS for TODO/FIXME/HACK/XXX markers using the `code-search` skill. Group by file/area, add brief context, and triage by apparent urgency. Present a prioritized list; do not change code.
