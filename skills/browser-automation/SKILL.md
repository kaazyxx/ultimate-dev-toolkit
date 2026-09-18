---
name: browser-automation
description: "Automate browsers (Playwright/Puppeteer/Selenium): navigation, forms, waits, headless, resilience. Use for UI automation of permitted sites."
---

# Browser Automation

**Category:** automation  ·  **Requires (detect first):** npx playwright

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx playwright`

## Key commands

```bash
npx playwright codegen
npx playwright test
```

## Checklist

- Explicit waits (not sleeps)
- Resilient selectors
- Respect target site's terms

## Common pitfalls

- Flaky flows from fixed sleeps
- Brittle CSS/XPath selectors
- Automating login/CAPTCHA where disallowed

## Related skills

- `e2e-testing`
- `web-scraping-legal`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
