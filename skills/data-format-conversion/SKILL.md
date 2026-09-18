---
name: data-format-conversion
description: Convert between data formats (JSON/YAML/TOML/XML/CSV/Parquet) losslessly with the right tools. Use for format conversion/interop.
---

# Data Format Conversion

**Category:** automation  ·  **Requires (detect first):** jq, yq

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `jq`
- `yq`

## Key commands

```bash
yq -o=json '.' file.yaml
jq '.' file.json
```

## Checklist

- Round-trip preserves data/types
- Encoding (UTF-8) handled
- Streaming for large files

## Common pitfalls

- Type loss (numbers as strings)
- Encoding corruption
- Loading huge files whole

## Related skills

- `file-format-handling`
- `csv-processing`
- `text-processing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
