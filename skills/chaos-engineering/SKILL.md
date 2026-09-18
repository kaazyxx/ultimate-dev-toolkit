---
name: chaos-engineering
description: Test resilience with controlled fault injection (latency, failures, resource limits). Use to validate reliability assumptions.
---

# Chaos Engineering

**Category:** devops

## Checklist

- Blast radius bounded; run in a safe env first
- Hypothesis and steady-state defined
- Rollback/abort ready

## Common pitfalls

- Chaos in prod with no guardrails
- No steady-state baseline to compare

## Related skills

- `sre-slo`
- `incident-response`
- `deployment-strategies`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
