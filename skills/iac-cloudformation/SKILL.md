---
name: iac-cloudformation
description: "Provision AWS with CloudFormation/CDK/SAM templates: stacks, changesets, drift. Use for AWS templates. Detect aws cli first."
---

# Iac Cloudformation

**Category:** devops  ·  **Requires (detect first):** aws

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `aws`

## Key commands

```bash
aws cloudformation validate-template --template-body file://tpl.yaml
aws cloudformation deploy --template-file tpl.yaml --stack-name s
```

## Checklist

- Changesets reviewed before deploy
- IAM least privilege
- Deletion policies for stateful resources

## Common pitfalls

- Accidental replacement deleting data
- Overly broad IAM policies
- No drift detection

## Related skills

- `cloud-aws`
- `iac-terraform`
- `security-iam`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
