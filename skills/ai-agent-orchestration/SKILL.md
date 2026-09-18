---
name: ai-agent-orchestration
description: "Orchestrate multi-step/multi-agent AI systems: planning, tool routing, memory, budgets, evaluation, guardrails. Use for agentic pipelines."
---

# Ai Agent Orchestration

**Category:** ai

## Checklist

- Bounded loops (max steps/cost)
- Untrusted tool output treated as data
- End-to-end task success measured

## Common pitfalls

- Unbounded loops burning budget
- Prompt injection via tool/content output
- No eval of the full task, only steps

## Related skills

- `llm-agents`
- `mcp-server-dev`
- `llm-evaluation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
