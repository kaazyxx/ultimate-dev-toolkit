---
name: file-format-handling
description: "Read/write/validate structured file formats (JSON/YAML/TOML/XML/INI): schema validation, safe parsing. Use when handling config/data files."
---

# File Format Handling

**Category:** automation  ·  **Requires (detect first):** jq, yq

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `jq`
- `yq`

## Key commands

```bash
jq empty file.json
yq '.' file.yaml
```

## Checklist

- Parsed safely (no arbitrary code exec)
- Schema-validated where possible
- Comments/anchors preserved if needed

## Common pitfalls

- Unsafe YAML load (code execution)
- XML external entity (XXE) injection
- Silent parse errors

## Related skills

- `data-format-conversion`
- `security-input-validation`
- `env-config-management`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
