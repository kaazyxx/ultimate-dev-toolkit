---
name: function-calling
description: "Design LLM tool/function-calling: JSON schemas, validation, error handling, parallel calls, determinism. Use when wiring tools to an LLM."
---

# Function Calling

**Category:** ai

## Checklist

- Strict, minimal tool schemas
- Validate arguments before executing
- Handle/return tool errors as data

## Common pitfalls

- Loose schemas causing bad calls
- Executing tool args without validation
- No timeout/limit on tool loops

## Related skills

- `llm-agents`
- `mcp-server-dev`
- `ai-api-integration`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
