---
name: license-compliance
description: "Manage open-source license compliance: SPDX, compatibility, attribution, copyleft awareness. Use before shipping/redistributing code."
---

# License Compliance

**Category:** tooling  ·  **Requires (detect first):** npx license-checker

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx license-checker`

## Key commands

```bash
npx license-checker --summary
```

## Checklist

- Dependency licenses inventoried
- Copyleft (GPL) compatibility checked
- Attribution/notices included

## Common pitfalls

- Shipping GPL code in proprietary products unknowingly
- Missing attribution
- Ignoring transitive licenses

## Related skills

- `security-dependencies`
- `opensource-publishing`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
