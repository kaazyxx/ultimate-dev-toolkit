---
name: backend-queues
description: "Use message queues/background jobs (Redis, RabbitMQ, SQS, Celery, BullMQ): idempotency, retries, DLQ. Use for async processing."
---

# Backend Queues

**Category:** web

## Checklist

- Jobs idempotent (safe to retry)
- Retries with backoff + dead-letter queue
- Visibility timeout > job duration

## Common pitfalls

- Non-idempotent jobs double-processing
- Poison messages with no DLQ
- Losing jobs on crash (no ack)

## Related skills

- `backend-caching`
- `cloud-aws`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
