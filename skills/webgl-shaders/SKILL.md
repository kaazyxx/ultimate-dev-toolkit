---
name: webgl-shaders
description: "Write GLSL shaders for WebGL/Three.js: vertex/fragment stages, uniforms, attributes, varyings, precision. Use for custom shaders and visual effects."
---

# Webgl Shaders

**Category:** game-graphics

## Checklist

- Precision qualifiers set (mediump/highp)
- Work moved to vertex stage where possible
- Uniforms updated efficiently

## Common pitfalls

- Expensive per-fragment branching
- Precision mismatches across devices
- Unbounded loops in fragment shaders

## Related skills

- `threejs`
- `shader-programming`
- `texture-3d`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
