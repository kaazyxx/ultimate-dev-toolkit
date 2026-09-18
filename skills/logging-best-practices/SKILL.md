---
name: logging-best-practices
description: "Log usefully: levels, structure, correlation ids, no secrets/PII, actionable messages. Use when adding logging."
---

# Logging Best Practices

**Category:** quality

## Checklist

- Structured logs with correct levels
- Correlation ids for tracing
- No secrets/PII logged

## Common pitfalls

- Logging secrets/PII
- Everything at one level (noise)
- Messages with no actionable context

## Related skills

- `observability-logging`
- `error-handling`
- `security-logging-monitoring`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
