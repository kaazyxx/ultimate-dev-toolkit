---
name: gitops-argocd
description: "Implement GitOps with Argo CD/Flux: declarative deploys, sync, drift detection. Use for GitOps workflows."
---

# Gitops Argocd

**Category:** devops  ·  **Requires (detect first):** kubectl, argocd

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`
- `argocd`

## Key commands

```bash
argocd app list
argocd app sync <app>
```

## Checklist

- Git is the source of truth
- Auto-sync/self-heal configured intentionally
- Secrets handled via sealed-secrets/SOPS

## Common pitfalls

- Manual kubectl changes causing drift
- Plaintext secrets in the Git repo

## Related skills

- `kubernetes-helm`
- `ci-cd-github-actions`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
