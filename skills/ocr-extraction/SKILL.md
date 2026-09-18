---
name: ocr-extraction
description: "Extract text/structure from images and PDFs (Tesseract/vision models): preprocessing, layout, tables, confidence. Use for document/OCR pipelines."
---

# Ocr Extraction

**Category:** ai  ·  **Requires (detect first):** tesseract

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `tesseract`

## Key commands

```bash
tesseract input.png out
```

## Checklist

- Preprocess (deskew/denoise/threshold)
- Validate low-confidence output
- Layout/table structure preserved

## Common pitfalls

- Feeding raw low-quality scans
- Trusting OCR without confidence checks
- Losing table/layout structure

## Related skills

- `pdf-processing`
- `image-processing`
- `computer-vision`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
