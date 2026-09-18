---
name: typescript
description: Write and type-check TypeScript with strict types, generics and inference. Use for .ts files, tsconfig.json projects, and type errors.
---

# Typescript

**Category:** languages  ·  **Requires (detect first):** npx tsc, npx eslint, npx prettier

Strong types that catch bugs at compile time, not runtime.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx tsc`
- `npx eslint`
- `npx prettier`

## Key commands

```bash
npx tsc --noEmit
npx eslint . --ext .ts
npx prettier --check .
```

## Checklist

- strict mode on; no implicit any
- Public APIs fully typed
- No unsafe casts hiding real type errors

## Common pitfalls

- Using any/as to silence real errors
- Trusting types at runtime boundaries instead of validating input
- Enums vs union literals confusion

## Related skills

- `javascript`
- `jsx-tsx`
- `backend-node`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
