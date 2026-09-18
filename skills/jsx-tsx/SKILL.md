---
name: jsx-tsx
description: "Work with JSX/TSX syntax used by React and similar libraries: components, props, hooks rules at the syntax level. Use for .jsx/.tsx files."
---

# Jsx Tsx

**Category:** languages  ·  **Requires (detect first):** npx tsc, npx eslint

Correct JSX/TSX: keys, hook rules, controlled inputs.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx tsc`
- `npx eslint`

## Key commands

```bash
npx eslint . --ext .tsx
npx tsc --noEmit
```

## Checklist

- Lists have stable keys
- Hooks called unconditionally at top level
- No unescaped user HTML (XSS)

## Common pitfalls

- Conditional hooks breaking rules of hooks
- Missing/duplicate keys causing render bugs
- dangerouslySetInnerHTML without sanitization

## Related skills

- `typescript`
- `web-frontend-react`
- `web-accessibility`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
