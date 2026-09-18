---
name: observability
description: "Make a running system legible: structured logs, metrics, traces, and process/resource monitoring, plus turning raw errors into actionable diagnostics. Use when investigating production or performance issues."
---

# Observability

**Category:** engineering

You cannot fix what you cannot see — add signal before guessing.

## When to use

- When diagnosing a live issue with poor visibility
- When errors are vague and need better context
- To monitor CPU/memory/IO/network of a process under load

## Workflow

1. Identify the signal you lack (log, metric, trace) and add the minimal instrumentation.
2. Prefer structured logs with correlation ids over free-text prints.
3. Reproduce under monitoring; correlate the symptom with resource/latency data.
4. Turn the finding into a permanent metric/alert if it can recur.

## Checklist

- Logs are structured and correlatable
- The measured signal actually explains the symptom
- No secret leaks into logs/traces

## Common pitfalls

- Logging secrets or PII
- Adding noisy logs that drown the signal

## Related skills

- `debugging`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
