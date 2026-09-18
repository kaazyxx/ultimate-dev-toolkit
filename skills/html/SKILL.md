---
name: html
description: Write, analyze and validate semantic, accessible HTML. Use for .html files, templates, and markup structure/accessibility questions.
---

# Html

**Category:** languages  ·  **Requires (detect first):** npx html-validate, npx htmlhint

Semantic, accessible, valid markup.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx html-validate`
- `npx htmlhint`

## Key commands

```bash
npx html-validate "**/*.html"
npx htmlhint src/
```

## Checklist

- Landmark elements and headings are semantic
- Images have alt text; form inputs have labels
- Document validates with no errors

## Common pitfalls

- Div soup instead of semantic elements
- Missing alt/labels breaking accessibility
- Inline styles/scripts that bypass CSP

## Related skills

- `css`
- `javascript`
- `web-accessibility`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
