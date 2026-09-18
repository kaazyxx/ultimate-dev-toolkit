---
name: conventional-commits
description: "Adopt Conventional Commits: types/scopes, commitlint, automated changelog/versioning. Use to standardize commit history."
---

# Conventional Commits

**Category:** devex  ·  **Requires (detect first):** npx commitlint

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx commitlint`

## Key commands

```bash
npx commitlint --edit
```

## Common pitfalls

- Inconsistent types breaking automation
- No enforcement (lint/hook)
- Overly granular scopes

## Related skills

- `changelog-release`
- `versioning-semver`
- `pre-commit-hooks`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
