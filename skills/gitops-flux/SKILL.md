---
name: gitops-flux
description: "Implement GitOps with Flux: sources, kustomizations, image automation, drift. Use for Flux-based delivery."
---

# Gitops Flux

**Category:** devops  ·  **Requires (detect first):** flux, kubectl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `flux`
- `kubectl`

## Key commands

```bash
flux check
flux get kustomizations
```

## Common pitfalls

- Manual kubectl changes causing drift
- Plaintext secrets in Git
- Unbounded reconciliation intervals

## Related skills

- `gitops-argocd`
- `kubernetes-core`
- `secrets-management-ops`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
