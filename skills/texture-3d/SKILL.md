---
name: texture-3d
description: "Create and apply 3D textures and PBR materials: albedo/base-color, normal, roughness, metallic, ambient-occlusion, height/displacement and emission maps, UV unwrapping, texture baking and texel density. Use for 3D texturing, material authoring, and texture sets (.png/.exr/.hdr). Detect Blender/ImageMagick before claiming you can bake or process maps."
---

# Texture 3d

**Category:** 3d-graphics  ·  **Requires (detect first):** blender, magick

Author correct PBR texture sets and materials, with UVs, baking and sane texel density.

## When to use

- When texturing a 3D model or authoring a PBR material
- When building or fixing a map set (base color / normal / roughness / metallic / AO / height)
- When UVs, seams, baking or texel density are the problem

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `blender`
- `magick`

## Workflow

1. Pick a workflow: metallic-roughness (glTF/most engines) vs specular-glossiness; stay consistent.
2. Unwrap UVs with minimal stretch and sensible seams; keep uniform texel density across the model.
3. Author or acquire the map set; keep color maps in sRGB and data maps (normal/roughness/metallic/AO/height) in linear/non-color.
4. Bake high-to-low-poly maps (normal, AO, curvature) if needed; verify tangent-space normal orientation (OpenGL vs DirectX green channel).
5. Channel-pack where the target engine expects it (e.g. ORM = AO/Roughness/Metallic in R/G/B) and export at power-of-two resolutions.

## Key commands

```bash
magick albedo.png -resize 2048x2048 albedo_2k.png
magick ao.png roughness.png metallic.png -channel RGB -combine orm.png   # pack AO/Rough/Metal
blender -b scene.blend -P bake_maps.py   # headless bake via a Python script
```

## Checklist

- Color maps sRGB; data maps set to Non-Color/linear
- Normal map tangent space matches the target (OpenGL vs DirectX)
- Consistent texel density; no wasted UV space; power-of-two resolutions

## Common pitfalls

- Roughness/metallic/normal tagged as sRGB (washed-out or wrong shading)
- Flipped green channel on normal maps (lighting looks inverted)
- Non-power-of-two or mismatched-resolution maps causing engine issues
- Seams and uneven texel density from a rushed UV unwrap

## PBR map cheat-sheet

| Map | Color space | Purpose |
| --- | --- | --- |
| Base color / Albedo | sRGB | Surface color, no lighting/AO baked in |
| Normal | Non-Color (linear) | Surface detail; watch OpenGL vs DirectX green channel |
| Roughness | Non-Color | Micro-surface roughness (invert for glossiness workflows) |
| Metallic | Non-Color | Metal vs dielectric mask |
| Ambient Occlusion | Non-Color | Baked contact shadow; multiply, don't bake into albedo |
| Height / Displacement | Non-Color | Parallax/displacement; keep midpoint at 0.5 for parallax |
| Emission | sRGB | Self-illumination |

For real-time engines, prefer the metallic-roughness workflow and pack **ORM** (AO=R, Roughness=G, Metallic=B). Author in a dedicated tool (Substance Painter, Blender, Materialize, Krita) and process/pack channels with ImageMagick when needed.

## Related skills

- `blender-mcp`
- `image-processing`
- `webassembly`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
