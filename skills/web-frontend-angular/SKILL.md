---
name: web-frontend-angular
description: "Build Angular apps: components, services, DI, RxJS, signals. Use for angular.json projects and .component.ts files."
---

# Web Frontend Angular

**Category:** web  ·  **Requires (detect first):** npx ng

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx ng`

## Key commands

```bash
npx ng serve
npx ng build
npx ng test
```

## Checklist

- Subscriptions unsubscribed (async pipe/takeUntil)
- Change detection strategy considered
- DI providers scoped correctly

## Common pitfalls

- Memory leaks from unmanaged subscriptions
- OnPush pitfalls with mutation
- Overusing any in templates

## Related skills

- `typescript`
- `web-state-management`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
