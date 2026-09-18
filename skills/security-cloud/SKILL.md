---
name: security-cloud
description: "Secure cloud accounts: least-privilege IAM, encryption, public-access prevention, config/CSPM checks. Use when reviewing cloud posture."
---

# Security Cloud

**Category:** security  ·  **Requires (detect first):** prowler, scoutsuite

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `prowler`
- `scoutsuite`

## Key commands

```bash
prowler aws
```

## Checklist

- No public buckets/DBs by default
- Encryption at rest/in transit
- IAM least privilege; logging enabled

## Common pitfalls

- Public storage buckets
- Overly broad IAM
- Disabled audit logging

## Related skills

- `security-iam`
- `cloud-aws`
- `security-audit`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
