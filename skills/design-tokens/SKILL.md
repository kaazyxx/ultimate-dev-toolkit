---
name: design-tokens
description: Define and pipeline design tokens (color/space/type/radius) across platforms (Style Dictionary). Use for a single source of truth for design values.
---

# Design Tokens

**Category:** product  ·  **Requires (detect first):** npx style-dictionary

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx style-dictionary`

## Key commands

```bash
npx style-dictionary build
```

## Common pitfalls

- Hardcoded values diverging from tokens
- No naming scale/semantic layer
- Tokens not synced across platforms

## Related skills

- `design-systems`
- `web-tailwind`
- `css`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
