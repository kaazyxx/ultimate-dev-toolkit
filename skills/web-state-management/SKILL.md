---
name: web-state-management
description: Choose and apply frontend state management (local, context, Redux, Zustand, Pinia, signals) appropriately. Use when state grows tangled.
---

# Web State Management

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run test
```

## Checklist

- Server state (queries) separated from UI state
- Global store only for truly shared state
- Selectors avoid over-subscription

## Common pitfalls

- Putting server cache state in global stores by hand
- Over-globalizing local state

## Related skills

- `web-frontend-react`
- `backend-rest-api`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
