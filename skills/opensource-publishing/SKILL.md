---
name: opensource-publishing
description: "Publish open-source responsibly: license, README, contributing, secret scrubbing, CI, releases. Use when open-sourcing a project."
---

# Opensource Publishing

**Category:** quality  ·  **Requires (detect first):** git, gitleaks

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`
- `gitleaks`

## Key commands

```bash
gitleaks detect --source .
gh repo create
```

## Checklist

- No secrets in code or history
- License, README, CONTRIBUTING present
- CI and clear release process

## Common pitfalls

- Publishing secrets/internal references
- No license (unusable by others)
- Empty README/onboarding

## Related skills

- `license-compliance`
- `security-secrets`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
