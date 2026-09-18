---
name: backend-websockets
description: "Build realtime features with WebSockets/SSE: connection lifecycle, backpressure, auth, scaling. Use for realtime servers."
---

# Backend Websockets

**Category:** web

## Checklist

- Auth on connect and per-message where needed
- Heartbeats/reconnect handled
- Backpressure and fan-out considered

## Common pitfalls

- No reconnection/heartbeat strategy
- Unbounded broadcast memory growth
- Auth only at HTTP upgrade

## Related skills

- `backend-node`
- `backend-caching`
- `observability`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
