---
name: css
description: "Write and debug modern CSS: layout (flexbox/grid), responsive design, custom properties, specificity. Use for .css files and styling/layout issues."
---

# Css

**Category:** languages  ·  **Requires (detect first):** npx stylelint, npx prettier

Predictable layout with modern CSS, minimal specificity wars.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx stylelint`
- `npx prettier`

## Key commands

```bash
npx stylelint "**/*.css"
npx prettier --check "**/*.css"
```

## Checklist

- Layout uses flex/grid, not floats/hacks
- Responsive via relative units and media/container queries
- Specificity kept low and predictable

## Common pitfalls

- Over-specific selectors and !important escalation
- Fixed px everywhere breaking responsiveness
- Unscoped global styles leaking

## Related skills

- `html`
- `scss-sass`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
