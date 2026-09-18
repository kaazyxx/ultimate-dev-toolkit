---
name: backend-nestjs
description: "Build NestJS apps: modules, providers, DI, guards, pipes. Use for NestJS projects."
---

# Backend Nestjs

**Category:** web  ·  **Requires (detect first):** npx nest, npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx nest`
- `npm`

## Key commands

```bash
npm run start:dev
npm run test
```

## Checklist

- DTO validation via pipes
- Guards for auth; interceptors for cross-cutting
- Modules cohesive

## Common pitfalls

- Circular module dependencies
- Business logic leaking into controllers

## Related skills

- `backend-node`
- `typescript`
- `backend-auth`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
