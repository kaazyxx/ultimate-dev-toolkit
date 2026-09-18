---
name: physics-simulation
description: "Simulate physics: rigid bodies, collision detection/response, integration, constraints, stability. Use for game/simulation physics work."
---

# Physics Simulation

**Category:** game-graphics

## Checklist

- Fixed timestep integration
- Broadphase before narrowphase collision
- Numerical stability (no exploding forces)

## Common pitfalls

- Tunneling at high speeds (no CCD)
- Instability from large timesteps
- Accumulating floating-point drift

## Related skills

- `game-loop-patterns`
- `algorithms-data-structures`
- `matlab`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
