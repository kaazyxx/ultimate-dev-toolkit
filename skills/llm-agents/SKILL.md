---
name: llm-agents
description: "Build LLM agents/tool-use systems: tool definitions, loops, guardrails, budgets, evaluation. Use when building agentic workflows."
---

# Llm Agents

**Category:** data-ml

## Checklist

- Tools well-defined with validation
- Loop bounded (max steps/budget)
- Untrusted tool output treated as data, not instructions

## Common pitfalls

- Unbounded loops burning budget
- Prompt injection via tool output
- No evaluation of end-to-end task success

## Related skills

- `llm-prompting`
- `llm-evaluation`
- `ai-api-integration`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
