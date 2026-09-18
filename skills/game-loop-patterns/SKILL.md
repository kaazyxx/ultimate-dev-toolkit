---
name: game-loop-patterns
description: "Design robust game loops: fixed vs variable timestep, interpolation, decoupling update from render, determinism. Use when building/fixing a game loop."
---

# Game Loop Patterns

**Category:** game-graphics

## Checklist

- Fixed timestep for physics/determinism
- Interpolation for smooth rendering
- Update decoupled from render rate

## Common pitfalls

- Frame-rate-dependent logic
- Spiral of death from unbounded catch-up
- Non-deterministic physics in multiplayer

## Related skills

- `game-unity`
- `physics-simulation`
- `concurrency-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
