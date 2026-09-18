---
name: cobol
description: "Read and maintain COBOL business/legacy code: divisions, PIC clauses, records, files. Use for .cob/.cbl files. Detect cobc (GnuCOBOL) first."
---

# Cobol

**Category:** languages  ·  **Requires (detect first):** cobc

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cobc`

## Key commands

```bash
cobc -x -Wall prog.cob
cobc -x -free prog.cob
```

## Checklist

- PIC clauses match data widths
- File status codes checked
- Fixed vs free format understood

## Common pitfalls

- Numeric overflow/truncation from PIC mismatch
- Ignoring file status codes
- Column/format-sensitivity in fixed format

## Related skills

- `sql`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
