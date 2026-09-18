---
name: shader-programming
description: "Write shaders across APIs (GLSL/HLSL/WGSL): lighting models, PBR, post-processing, compute. Use for shader authoring beyond WebGL. Detect the toolchain first."
---

# Shader Programming

**Category:** game-graphics

## Checklist

- Correct color space (linear vs sRGB)
- PBR energy conservation respected
- GPU cost profiled, not guessed

## Common pitfalls

- Doing per-pixel work that belongs per-vertex
- Ignoring gamma/linear conversions
- Divergent branches killing warp efficiency

## Related skills

- `webgl-shaders`
- `texture-3d`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
