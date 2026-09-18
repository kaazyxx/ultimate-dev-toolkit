---
name: code-search
description: "Search and navigate code efficiently: ripgrep, ast-grep, git grep, structural search, symbol lookup. Use to find code across a repo."
---

# Code Search

**Category:** tooling  ·  **Requires (detect first):** rg, ast-grep

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `rg`
- `ast-grep`

## Key commands

```bash
rg -n 'functionName' --type ts
ast-grep run -p 'console.log($A)'
```

## Checklist

- Use structural search for code patterns
- Scope by file type/path
- Follow definitions, not just text

## Common pitfalls

- Text search matching comments/strings unintentionally
- Missing matches in generated/ignored files

## Related skills

- `code-analysis`
- `regex-mastery`
- `ast-transformation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
