---
name: monorepo-tools
description: "Manage monorepos (Nx/Turborepo/pnpm workspaces/Lerna): task graphs, affected builds, caching, boundaries. Use for monorepo setups."
---

# Monorepo Tools

**Category:** tooling  ·  **Requires (detect first):** npx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`

## Key commands

```bash
npx turbo run build
npx nx affected -t test
```

## Checklist

- Only affected projects built/tested
- Remote/local caching enabled
- Module boundaries enforced

## Common pitfalls

- Rebuilding everything on each change
- Circular project dependencies
- No boundary enforcement

## Related skills

- `package-managers`
- `bazel-build-tool`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
