---
name: data-streaming
description: "Build streaming data pipelines (Kafka Streams/Flink/Spark Streaming): windowing, exactly-once, state. Use for realtime data processing."
---

# Data Streaming

**Category:** data-ml

## Checklist

- Delivery semantics chosen (at-least/exactly-once)
- Windowing/watermarks for late data
- State store sized/checkpointed

## Common pitfalls

- Ignoring late/out-of-order events
- Unbounded state growth
- Assuming exactly-once without config

## Related skills

- `message-broker-ops`
- `data-etl-pipelines`
- `backend-websockets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
