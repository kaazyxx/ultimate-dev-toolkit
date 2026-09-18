---
name: security-dependencies
description: "Find and fix vulnerable dependencies: audit tools, transitive risk, safe upgrades, lockfiles. Use for dependency/CVE management."
---

# Security Dependencies

**Category:** security  ·  **Requires (detect first):** npm, pip-audit, osv-scanner

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`
- `pip-audit`
- `osv-scanner`

## Key commands

```bash
npm audit
pip-audit
osv-scanner -r .
```

## Checklist

- Direct and transitive deps scanned
- High/critical CVEs triaged and fixed
- Lockfile committed and pinned

## Common pitfalls

- Ignoring transitive vulnerabilities
- Blindly bumping and breaking builds
- No lockfile (irreproducible installs)

## Related skills

- `security-supply-chain`
- `security-audit`
- `package-managers`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
