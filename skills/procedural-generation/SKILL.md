---
name: procedural-generation
description: "Generate content procedurally: noise (Perlin/Simplex), seeds, wave function collapse, L-systems, reproducibility. Use for procgen terrain/levels/textures."
---

# Procedural Generation

**Category:** game-graphics

## Checklist

- Seeded RNG for reproducibility
- Constraints keep output valid/playable
- Performance bounded for large worlds

## Common pitfalls

- Non-seeded randomness (irreproducible bugs)
- Unbounded generation cost
- Output that violates gameplay constraints

## Related skills

- `algorithms-data-structures`
- `texture-3d`
- `game-godot-engine`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
