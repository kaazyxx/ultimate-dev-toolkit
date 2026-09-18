---
name: text-processing
description: "Process text at scale (grep/sed/awk/jq/Python): parsing, extraction, transformation, encoding. Use for text/log/data wrangling."
---

# Text Processing

**Category:** automation  ·  **Requires (detect first):** rg, awk, sed

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `rg`
- `awk`
- `sed`

## Key commands

```bash
awk -F, '{print $2}' data.csv
sed -n '10,20p' file.txt
```

## Checklist

- Encoding handled (UTF-8)
- Streaming for large files
- Edge cases (empty/quoted fields) handled

## Common pitfalls

- Assuming ASCII on Unicode text
- Line-based tools on multiline records
- Regex where a real parser is needed

## Related skills

- `regex-mastery`
- `log-analysis`
- `csv-processing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
