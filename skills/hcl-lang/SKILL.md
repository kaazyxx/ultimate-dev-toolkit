---
name: hcl-lang
description: "Write HCL for Terraform/Packer/Nomad: blocks, expressions, variables, functions. Use for .hcl/.tf files. Detect terraform/packer first."
---

# Hcl Lang

**Category:** languages  ·  **Requires (detect first):** terraform, packer

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `terraform`
- `packer`

## Key commands

```bash
terraform fmt -check
terraform validate
packer fmt .
```

## Checklist

- Variables typed and validated
- No secrets hardcoded
- Modules parameterized, not copy-pasted

## Common pitfalls

- Secrets in plaintext .tf/state
- Overusing count where for_each fits
- Unpinned module/provider versions

## Related skills

- `iac-terraform`
- `iac-packer-vagrant`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
