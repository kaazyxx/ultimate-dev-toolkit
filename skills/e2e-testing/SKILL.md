---
name: e2e-testing
description: "Write end-to-end tests (Playwright/Cypress/Selenium): critical user journeys, stability, flakiness control. Use for full-stack UI flows."
---

# E2e Testing

**Category:** testing  ·  **Requires (detect first):** npx playwright

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx playwright`

## Key commands

```bash
npx playwright test
npx cypress run
```

## Checklist

- Cover critical journeys, not everything
- Stable selectors (roles/test ids)
- Flaky tests quarantined/fixed

## Common pitfalls

- Slow, flaky suites eroding trust
- Testing everything at e2e level
- Selectors tied to markup

## Related skills

- `web-component-testing`
- `testing-strategy`
- `load-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
