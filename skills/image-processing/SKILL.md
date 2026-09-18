---
name: image-processing
description: "Process images (Pillow/ImageMagick/sharp): resize, convert, optimize, metadata, batch. Use for image manipulation."
---

# Image Processing

**Category:** automation  ·  **Requires (detect first):** magick, python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `magick`
- `python`

## Key commands

```bash
magick input.png -resize 50% out.png
```

## Checklist

- Format/quality chosen for use case
- Metadata (EXIF) stripped if sensitive
- Batch operations streamed

## Common pitfalls

- Leaking location/EXIF metadata
- Lossy re-encoding degrading quality
- Loading huge images without limits

## Related skills

- `file-operations`
- `web-performance`
- `pdf-processing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
