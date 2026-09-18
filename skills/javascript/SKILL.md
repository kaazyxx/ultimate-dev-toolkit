---
name: javascript
description: Write, lint, format, test and debug modern JavaScript (ES2020+), Node and browser. Use for .js/.mjs/.cjs files and package.json projects.
---

# Javascript

**Category:** languages  ·  **Requires (detect first):** node, npx eslint, npx prettier, npm

Modern, linted, tested JS with no needless transpilation.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`
- `npx eslint`
- `npx prettier`
- `npm`

## Key commands

```bash
node script.mjs
npx eslint .
npx prettier --check .
npm test
```

## Checklist

- Async errors handled (await in try/catch)
- No unhandled promise rejections
- Lint and tests green

## Common pitfalls

- Floating promises / missing await
- == vs ===, and this-binding surprises
- Mutating shared state across modules

## Related skills

- `typescript`
- `jsx-tsx`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
