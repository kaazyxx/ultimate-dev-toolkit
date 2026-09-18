---
name: pre-commit-hooks
description: "Automate checks before commit/push with pre-commit/husky/lefthook: lint, format, secret scan, tests. Use to catch issues early."
---

# Pre Commit Hooks

**Category:** tooling  ·  **Requires (detect first):** pre-commit

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `pre-commit`

## Key commands

```bash
pre-commit run --all-files
pre-commit install
```

## Checklist

- Fast checks only (keep commits snappy)
- Same checks mirrored in CI
- Secret scanning included

## Common pitfalls

- Slow hooks that developers bypass
- Hooks not enforced in CI (easy to skip)

## Related skills

- `linting-formatting`
- `security-secrets`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
