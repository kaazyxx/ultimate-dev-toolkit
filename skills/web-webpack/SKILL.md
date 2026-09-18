---
name: web-webpack
description: "Configure and debug webpack: loaders, plugins, code splitting, tree shaking. Use for webpack.config.js projects."
---

# Web Webpack

**Category:** web  ·  **Requires (detect first):** npx webpack

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx webpack`

## Key commands

```bash
npx webpack --mode production
npx webpack-bundle-analyzer stats.json
```

## Checklist

- Code splitting on routes/vendors
- Source maps configured for the environment
- Tree shaking not defeated by side effects

## Common pitfalls

- Huge bundles from missing splitChunks
- sideEffects flag missing, breaking tree shaking

## Related skills

- `web-vite`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
