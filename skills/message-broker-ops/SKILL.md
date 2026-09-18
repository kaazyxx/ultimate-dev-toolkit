---
name: message-broker-ops
description: "Operate Kafka/RabbitMQ/NATS: topics/queues, partitions, consumer groups, retention, DLQ. Use for broker setup/ops."
---

# Message Broker Ops

**Category:** devops

## Checklist

- Partitioning matches throughput/ordering needs
- Consumer lag monitored
- Retention and DLQ configured

## Common pitfalls

- Unmonitored consumer lag
- Rebalancing storms from bad config
- No dead-letter handling

## Related skills

- `backend-queues`
- `microservices-patterns`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
