---
name: web-frontend-qwik
description: Build Qwik apps with resumability and lazy execution. Use for Qwik projects. Detect the toolchain first.
---

# Web Frontend Qwik

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run dev
npm run build
```

## Checklist

- $ boundaries used for lazy loading
- Serialization of state understood
- Minimal eager JS

## Common pitfalls

- Breaking resumability with eager code
- Non-serializable state in components

## Related skills

- `web-frontend-solid`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
