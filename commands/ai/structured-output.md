---
description: Make an LLM call return validated structured output.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Review $ARGUMENTS using the `structured-output` skill. Replace free-text parsing with JSON-schema/tool-calling, add validation + repair on invalid output, and handle streaming partials. Report the changes. Read-only.
