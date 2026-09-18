---
name: cloud-gcp
description: "Build on Google Cloud: GCE, GCS, Cloud Functions/Run, GKE, IAM, and gcloud. Use for GCP services. Detect gcloud first."
---

# Cloud Gcp

**Category:** platforms  ·  **Requires (detect first):** gcloud

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gcloud`

## Key commands

```bash
gcloud auth list
gcloud projects list
```

## Checklist

- IAM least privilege; service accounts scoped
- No public buckets by default
- Budgets/quotas set

## Common pitfalls

- Broad primitive roles (owner/editor)
- Public GCS buckets
- Default service account overuse

## Related skills

- `security-cloud`
- `iac-terraform`
- `cloud-serverless`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
