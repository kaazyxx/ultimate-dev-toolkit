---
name: gis-geospatial
description: "Work with geospatial data: projections/CRS, raster/vector, GDAL/OGR, PostGIS, tiles. Use for maps/GIS. Detect gdal first."
---

# Gis Geospatial

**Category:** scientific  ·  **Requires (detect first):** gdalinfo, ogr2ogr

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gdalinfo`
- `ogr2ogr`

## Key commands

```bash
gdalinfo raster.tif
ogr2ogr -f GeoJSON out.geojson in.shp
```

## Common pitfalls

- Mismatched CRS/projection (misplaced data)
- Assuming lat/lon order
- Huge rasters without tiling/overviews

## Related skills

- `computational-geometry`
- `db-postgres`
- `data-visualization`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
