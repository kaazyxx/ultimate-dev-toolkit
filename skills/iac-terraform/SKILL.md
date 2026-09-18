---
name: iac-terraform
description: "Manage infrastructure as code with Terraform/OpenTofu: providers, state, modules, plan/apply. Use for .tf files. Detect terraform/tofu first."
---

# Iac Terraform

**Category:** devops  ·  **Requires (detect first):** terraform, tofu

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `terraform`
- `tofu`

## Key commands

```bash
terraform init
terraform validate
terraform plan
terraform fmt -check
```

## Checklist

- Remote state with locking
- plan reviewed before apply
- No secrets in state/committed files

## Common pitfalls

- Local state causing conflicts/loss
- terraform apply without reviewing plan
- Secrets stored in plaintext state

## Related skills

- `iac-pulumi`
- `cloud-aws`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
