---
name: pdf-processing
description: "Extract, generate and manipulate PDFs (pdfplumber/pypdf/pdftotext): text/tables, merging, forms. Use for PDF tasks."
---

# Pdf Processing

**Category:** automation  ·  **Requires (detect first):** python, pdftotext

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `pdftotext`

## Key commands

```bash
pdftotext input.pdf out.txt
```

## Checklist

- Text extraction validated (layout matters)
- OCR for scanned PDFs
- Large PDFs streamed

## Common pitfalls

- Assuming all PDFs have selectable text
- Broken table extraction
- Ignoring OCR needs

## Related skills

- `text-processing`
- `image-processing`
- `data-format-conversion`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
