---
name: accessibility-testing
description: "Test accessibility automatically and manually (axe, screen readers, keyboard): WCAG conformance, real assistive-tech checks. Use to verify a11y."
---

# Accessibility Testing

**Category:** qa  ·  **Requires (detect first):** npx axe

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx axe`

## Key commands

```bash
npx @axe-core/cli http://localhost:3000
```

## Common pitfalls

- Automated-only (misses ~50% of issues)
- No keyboard/screen-reader testing
- Testing after ship instead of in CI

## Related skills

- `web-accessibility`
- `e2e-testing`
- `web-component-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
