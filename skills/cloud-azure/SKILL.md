---
name: cloud-azure
description: "Build on Azure: VMs, Blob Storage, Functions, AKS, Entra ID, and the CLI. Use for Azure services. Detect the az cli first."
---

# Cloud Azure

**Category:** platforms  ·  **Requires (detect first):** az

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `az`

## Key commands

```bash
az account show
az group list
```

## Checklist

- RBAC least privilege
- Managed identities over secrets
- Resource tagging and cost controls

## Common pitfalls

- Over-permissive RBAC
- Secrets instead of managed identity
- Untagged sprawling resources

## Related skills

- `security-cloud`
- `iac-terraform`
- `cloud-serverless`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
