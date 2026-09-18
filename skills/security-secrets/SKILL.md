---
name: security-secrets
description: "Detect and prevent leaked secrets: scanning, .gitignore, env handling, rotation after exposure. Use to find/remove credentials in code or history."
---

# Security Secrets

**Category:** security  ·  **Requires (detect first):** gitleaks, trufflehog

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gitleaks`
- `trufflehog`

## Key commands

```bash
gitleaks detect --source .
trufflehog filesystem .
```

## Checklist

- No secrets in code, config, or git history
- Leaked secrets rotated, not just deleted
- Secrets loaded from a manager/env

## Common pitfalls

- Deleting a secret from a file but not rotating it
- Secrets remaining in git history
- Secrets echoed in logs/CI

## Related skills

- `secrets-management-ops`
- `security-audit`
- `git-history-rewrite`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
