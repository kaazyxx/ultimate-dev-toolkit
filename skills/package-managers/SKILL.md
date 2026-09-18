---
name: package-managers
description: "Use package managers correctly (npm/pnpm/yarn/pip/poetry/cargo/go/maven): lockfiles, reproducible installs, audits. Use for dependency install/management."
---

# Package Managers

**Category:** tooling  ·  **Requires (detect first):** npm, pnpm, pip

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `pnpm`
- `pip`

## Key commands

```bash
npm ci
pnpm install --frozen-lockfile
pip install -r requirements.txt
```

## Checklist

- Lockfile committed and respected (ci/frozen)
- Exact versions for apps; ranges for libs
- Audited for vulnerabilities

## Common pitfalls

- Ignoring/deleting lockfiles (irreproducible)
- Mixing package managers in one repo
- Installing globally when local is right

## Related skills

- `security-dependencies`
- `monorepo-tools`
- `dependency-management`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
