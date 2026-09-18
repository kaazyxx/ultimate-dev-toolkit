---
name: mqtt-iot
description: "Build IoT messaging with MQTT: topics, QoS, retained/LWT messages, TLS, constrained devices. Use for IoT device/broker comms."
---

# Mqtt Iot

**Category:** embedded  ·  **Requires (detect first):** mosquitto_pub, mosquitto_sub

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mosquitto_pub`
- `mosquitto_sub`

## Key commands

```bash
mosquitto_sub -h broker -t 'devices/#' -v
mosquitto_pub -h broker -t devices/1 -m '{}'
```

## Checklist

- QoS level matches delivery needs
- TLS + auth on the broker
- Last-Will (LWT) for offline detection

## Common pitfalls

- Unencrypted/unauthenticated brokers
- Wrong QoS (lost or duplicated messages)
- Unbounded topic cardinality

## Related skills

- `message-broker-ops`
- `arduino`
- `security-network`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
