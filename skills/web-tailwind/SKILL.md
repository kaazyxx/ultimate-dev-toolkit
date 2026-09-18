---
name: web-tailwind
description: Style with Tailwind CSS utility classes and design tokens. Use for tailwind.config projects and utility-class styling.
---

# Web Tailwind

**Category:** web  ·  **Requires (detect first):** npx tailwindcss

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx tailwindcss`

## Key commands

```bash
npx tailwindcss -i in.css -o out.css --watch
```

## Checklist

- Design tokens in config, not scattered magic values
- Repeated patterns extracted to components
- Purge/content paths correct

## Common pitfalls

- Unbounded class soup instead of components
- Missing content globs producing empty CSS

## Related skills

- `css`
- `web-frontend-react`
- `design-systems`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
