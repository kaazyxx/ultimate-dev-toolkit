---
name: kubernetes-helm
description: "Package and deploy Kubernetes apps with Helm charts: templates, values, releases. Use for Chart.yaml/helm projects. Detect helm first."
---

# Kubernetes Helm

**Category:** devops  ·  **Requires (detect first):** helm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `helm`

## Key commands

```bash
helm lint .
helm template .
helm upgrade --install app .
```

## Checklist

- Values documented and sane defaults
- Templates render (helm template) cleanly
- Release upgrades tested/rollback-able

## Common pitfalls

- Hardcoding values instead of parameterizing
- No resource limits in chart defaults
- Unpinned dependency chart versions

## Related skills

- `kubernetes-core`
- `kubernetes-kustomize`
- `gitops-argocd`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
