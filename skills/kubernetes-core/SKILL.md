---
name: kubernetes-core
description: "Work with Kubernetes: pods, deployments, services, configmaps, secrets, probes, resources. Use for k8s manifests and cluster ops. Detect kubectl first."
---

# Kubernetes Core

**Category:** devops  ·  **Requires (detect first):** kubectl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`

## Key commands

```bash
kubectl get pods -A
kubectl describe pod <p>
kubectl logs <p>
kubectl apply -f manifest.yaml
```

## Checklist

- Resource requests/limits set
- Liveness/readiness probes defined
- Secrets not in plain manifests/committed

## Common pitfalls

- No resource limits (noisy neighbor/OOM)
- latest image tag (non-reproducible)
- Secrets committed as base64 (not encrypted)

## Related skills

- `kubernetes-helm`
- `kubernetes-troubleshooting`
- `docker-fundamentals`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
