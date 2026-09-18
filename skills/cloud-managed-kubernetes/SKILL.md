---
name: cloud-managed-kubernetes
description: "Operate managed Kubernetes (EKS/AKS/GKE): node pools, autoscaling, IAM integration, upgrades. Use for managed k8s clusters."
---

# Cloud Managed Kubernetes

**Category:** platforms  ·  **Requires (detect first):** kubectl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`

## Key commands

```bash
kubectl get nodes
kubectl top nodes
```

## Checklist

- Node pools sized/autoscaled
- Cluster IAM integration least-privilege
- Upgrade strategy planned

## Common pitfalls

- Unmanaged version drift
- Single node pool for all workloads
- Cluster admin handed out broadly

## Related skills

- `kubernetes-core`
- `cloud-aws`
- `capacity-planning`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
