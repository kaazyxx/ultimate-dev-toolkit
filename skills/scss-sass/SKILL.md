---
name: scss-sass
description: Author SCSS/Sass with variables, mixins, nesting and partials that compile to clean CSS. Use for .scss/.sass files.
---

# Scss Sass

**Category:** languages  ·  **Requires (detect first):** sass, npx stylelint

Structured, DRY stylesheets that compile predictably.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sass`
- `npx stylelint`

## Key commands

```bash
sass src/styles.scss dist/styles.css
npx stylelint "**/*.scss"
```

## Checklist

- Nesting kept shallow (<=3)
- Shared values in variables/tokens
- No compiled-CSS committed if built in CI

## Common pitfalls

- Deep nesting producing bloated selectors
- Overusing @extend causing selector explosions

## Related skills

- `css`
- `html`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
