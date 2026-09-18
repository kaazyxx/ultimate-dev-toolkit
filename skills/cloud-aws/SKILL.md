---
name: cloud-aws
description: "Build on AWS: EC2, S3, Lambda, RDS, IAM, VPC, and the CLI. Use for AWS infrastructure/services. Detect the aws cli first."
---

# Cloud Aws

**Category:** platforms  ·  **Requires (detect first):** aws

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `aws`

## Key commands

```bash
aws sts get-caller-identity
aws s3 ls
aws lambda list-functions
```

## Checklist

- Least-privilege IAM
- No public S3/RDS by default
- Cost and region considered

## Common pitfalls

- Overly broad IAM policies
- Public buckets leaking data
- Runaway costs from unbounded resources

## Related skills

- `security-cloud`
- `iac-terraform`
- `cloud-serverless`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
