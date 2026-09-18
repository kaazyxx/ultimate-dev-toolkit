---
name: iac-pulumi
description: Manage infrastructure as code with Pulumi in a real programming language. Use for Pulumi projects. Detect pulumi first.
---

# Iac Pulumi

**Category:** devops  ·  **Requires (detect first):** pulumi

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `pulumi`

## Key commands

```bash
pulumi preview
pulumi up
```

## Checklist

- Preview reviewed before up
- Secrets via pulumi config --secret
- State backend configured

## Common pitfalls

- Imperative side effects outside the resource graph
- Secrets in plaintext config

## Related skills

- `iac-terraform`
- `cloud-aws`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
