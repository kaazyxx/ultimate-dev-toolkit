---
description: Add input/output guardrails to an LLM feature.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Review the LLM feature in $ARGUMENTS using the `llm-guardrails` skill. Ensure output is schema-validated, PII is redacted from prompts/outputs, and content policy is enforced outside the model. Report what to add. Read-only.
