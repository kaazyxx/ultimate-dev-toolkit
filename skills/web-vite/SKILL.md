---
name: web-vite
description: Configure and debug Vite builds, dev server, plugins and env handling. Use for vite.config projects.
---

# Web Vite

**Category:** web  ·  **Requires (detect first):** npx vite

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx vite`

## Key commands

```bash
npx vite
npx vite build
npx vite preview
```

## Checklist

- Env vars prefixed (VITE_) for client exposure
- Aliases/resolve configured
- Build output analyzed for size

## Common pitfalls

- Exposing secrets via VITE_ prefix
- Slow HMR from misconfigured deps optimization

## Related skills

- `web-webpack`
- `typescript`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
