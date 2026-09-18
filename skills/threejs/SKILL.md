---
name: threejs
description: "Build 3D web scenes with Three.js: scene/camera/renderer, geometries, materials, lights, the render loop, GLTF loading. Use for Three.js/WebGL projects."
---

# Threejs

**Category:** game-graphics  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run dev
npm run build
```

## Checklist

- Dispose geometries/materials/textures to avoid leaks
- requestAnimationFrame loop, not setInterval
- Draw calls minimized (instancing/merging)

## Common pitfalls

- GPU memory leaks from undisposed resources
- Too many draw calls / unbatched meshes
- Loading huge textures without compression

## Related skills

- `webgl-shaders`
- `webassembly`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
