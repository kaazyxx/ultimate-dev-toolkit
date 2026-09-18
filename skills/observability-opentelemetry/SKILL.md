---
name: observability-opentelemetry
description: "Add distributed tracing and metrics with OpenTelemetry: spans, context propagation, exporters. Use when tracing across services."
---

# Observability Opentelemetry

**Category:** devops

## Checklist

- Context propagated across service boundaries
- Spans named/attributed meaningfully
- Sampling strategy set

## Common pitfalls

- Broken trace context across async boundaries
- Over-instrumenting (cost/noise)
- PII in span attributes

## Related skills

- `observability`
- `observability-prometheus`
- `microservices-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
