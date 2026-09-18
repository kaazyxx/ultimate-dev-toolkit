---
name: web-component-testing
description: Test UI components by behavior with Testing Library / Playwright component tests. Use when adding frontend tests.
---

# Web Component Testing

**Category:** web  ·  **Requires (detect first):** npx vitest, npx playwright

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx vitest`
- `npx playwright`

## Key commands

```bash
npx vitest run
npx playwright test
```

## Checklist

- Query by role/text, not implementation details
- User interactions simulated realistically
- Accessibility asserted

## Common pitfalls

- Testing internal state instead of behavior
- Brittle selectors tied to markup

## Related skills

- `testing-strategy`
- `web-accessibility`
- `e2e-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
