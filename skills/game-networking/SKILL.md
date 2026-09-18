---
name: game-networking
description: "Build multiplayer networking: client prediction, server reconciliation, lag compensation, snapshot interpolation, authority. Use for netcode."
---

# Game Networking

**Category:** game-graphics

## Checklist

- Server-authoritative state
- Client prediction + reconciliation
- Interpolation/extrapolation for remote entities

## Common pitfalls

- Trusting the client (cheating)
- No lag compensation (unfair hits)
- Sending full state instead of deltas

## Related skills

- `backend-websockets`
- `distributed-systems`
- `game-loop-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
