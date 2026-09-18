---
name: web-accessibility
description: "Make web UI accessible to WCAG 2.2 AA: semantics, keyboard, focus, contrast, ARIA, screen readers. Use when building or auditing UI."
---

# Web Accessibility

**Category:** web  ·  **Requires (detect first):** npx axe, npx pa11y

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx axe`
- `npx pa11y`

## Key commands

```bash
npx pa11y http://localhost:3000
npx @axe-core/cli http://localhost:3000
```

## Checklist

- Keyboard operable; visible focus
- Semantic HTML before ARIA
- Contrast >= 4.5:1 for text

## Common pitfalls

- ARIA misused where semantic HTML suffices
- Focus traps and lost focus on route change
- Color-only status indicators

## Related skills

- `html`
- `web-frontend-react`
- `web-forms-validation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
