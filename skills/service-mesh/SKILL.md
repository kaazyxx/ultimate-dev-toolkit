---
name: service-mesh
description: Use a service mesh (Istio/Linkerd) for mTLS, traffic shaping, and observability. Use when adopting/operating a mesh.
---

# Service Mesh

**Category:** devops  ·  **Requires (detect first):** kubectl, istioctl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`
- `istioctl`

## Key commands

```bash
istioctl analyze
kubectl get virtualservices -A
```

## Checklist

- mTLS enforced between services
- Traffic policies (retry/timeout) declared
- Overhead/complexity justified

## Common pitfalls

- Adopting a mesh before you need it
- Sidecar resource overhead ignored

## Related skills

- `kubernetes-core`
- `microservices-patterns`
- `observability-opentelemetry`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
