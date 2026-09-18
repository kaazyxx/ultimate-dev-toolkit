---
name: secrets-management-ops
description: "Manage secrets across environments with Vault/SOPS/cloud secret managers: rotation, least access, no plaintext. Use for secret handling in infra."
---

# Secrets Management Ops

**Category:** devops  ·  **Requires (detect first):** sops, vault

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sops`
- `vault`

## Key commands

```bash
sops -e secrets.yaml > secrets.enc.yaml
vault kv get secret/app
```

## Checklist

- No plaintext secrets in Git/images/logs
- Rotation and least-privilege access
- Encrypted at rest and in transit

## Common pitfalls

- Committing .env with real secrets
- Long-lived static credentials
- Secrets in CI logs

## Related skills

- `security-secrets`
- `gitops-argocd`
- `iac-terraform`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
