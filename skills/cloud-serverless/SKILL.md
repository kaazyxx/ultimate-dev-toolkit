---
name: cloud-serverless
description: "Design serverless systems (Lambda/Functions/Workers): cold starts, statelessness, event-driven, limits. Use for FaaS architectures."
---

# Cloud Serverless

**Category:** platforms

## Checklist

- Functions stateless and idempotent
- Cold start and timeout limits respected
- Least-privilege per function

## Common pitfalls

- Long-running/stateful work in FaaS
- Cold-start latency ignored
- Fan-out overwhelming downstream

## Related skills

- `cloud-aws`
- `backend-queues`
- `microservices-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
