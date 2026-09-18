---
name: kubernetes-troubleshooting
description: "Diagnose Kubernetes failures: CrashLoopBackOff, ImagePullBackOff, pending pods, OOMKilled, networking. Use when pods/services misbehave."
---

# Kubernetes Troubleshooting

**Category:** devops  ·  **Requires (detect first):** kubectl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`

## Key commands

```bash
kubectl describe pod <p>
kubectl logs <p> --previous
kubectl get events --sort-by=.lastTimestamp
```

## Checklist

- Events and previous logs checked
- Resource/quota and scheduling constraints reviewed
- Probes and image tags verified

## Common pitfalls

- Ignoring events (the real cause is often there)
- Confusing readiness vs liveness failures
- Missing image pull secrets

## Related skills

- `kubernetes-core`
- `observability-prometheus`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
