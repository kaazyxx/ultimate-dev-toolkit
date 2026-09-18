---
name: kubernetes-kustomize
description: "Manage Kubernetes config with Kustomize overlays: bases, patches, per-env config. Use for kustomization.yaml."
---

# Kubernetes Kustomize

**Category:** devops  ·  **Requires (detect first):** kubectl, kustomize

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`
- `kustomize`

## Key commands

```bash
kubectl kustomize overlays/prod
kustomize build overlays/prod
```

## Checklist

- Base vs overlays separated per environment
- Patches minimal and targeted
- No secrets committed in overlays

## Common pitfalls

- Duplicating config instead of overlaying
- Patch selectors not matching resources

## Related skills

- `kubernetes-core`
- `kubernetes-helm`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
