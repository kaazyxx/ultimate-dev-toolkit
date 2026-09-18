---
name: sprite-animation
description: "Build 2D sprite animation: atlases, frame timing, state machines, skeletal (Spine/DragonBones). Use for 2D game animation."
---

# Sprite Animation

**Category:** game-graphics

## Checklist

- Atlas packing to reduce draw calls
- Frame timing independent of frame rate
- Animation state machine over ad-hoc flags

## Common pitfalls

- Per-frame texture swaps (draw call spikes)
- Timing tied to frame rate
- Texture bleeding from tight atlas packing

## Related skills

- `image-processing`
- `game-loop-patterns`
- `make-interfaces-feel-better`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
