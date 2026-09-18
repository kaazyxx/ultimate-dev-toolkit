---
name: computational-geometry
description: "Solve geometry problems: convex hulls, triangulation, intersections, spatial predicates, robustness. Use for CAD/GIS/graphics geometry."
---

# Computational Geometry

**Category:** scientific  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import shapely; print(shapely.__version__)"
```

## Common pitfalls

- Floating-point robustness (degenerate cases)
- Wrong orientation/winding assumptions
- O(n^2) where a spatial index fits

## Related skills

- `gis-geospatial`
- `physics-simulation`
- `algorithms-data-structures`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
