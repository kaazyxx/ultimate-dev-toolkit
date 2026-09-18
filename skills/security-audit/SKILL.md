---
name: security-audit
description: "Run a defensive security review of a codebase: secrets, dependencies, injection, authz, misconfig, OWASP Top 10. Use when auditing code for vulnerabilities."
---

# Security Audit

**Category:** security  ·  **Requires (detect first):** git, npx, trivy

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`
- `npx`
- `trivy`

## Key commands

```bash
git log -p | rg -i 'password|secret|api[_-]?key' | head
trivy fs .
```

## Checklist

- Secrets, deps, injection, authz, config all reviewed
- Findings prioritized by real exploitability
- Fixes suggested, not just flags

## Common pitfalls

- Reporting noise without exploitability
- Missing authorization (only checking authentication)

## Related skills

- `security-web`
- `security-secrets`
- `security-dependencies`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
