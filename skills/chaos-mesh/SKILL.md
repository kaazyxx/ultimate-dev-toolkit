---
name: chaos-mesh
description: "Run chaos experiments on Kubernetes (Chaos Mesh/Litmus): fault injection, blast radius, steady-state. Use for k8s resilience testing."
---

# Chaos Mesh

**Category:** devops  ·  **Requires (detect first):** kubectl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `kubectl`

## Key commands

```bash
kubectl apply -f chaos.yaml
kubectl get chaos
```

## Common pitfalls

- Chaos in prod without guardrails
- No steady-state hypothesis
- Blast radius not bounded

## Related skills

- `chaos-engineering`
- `kubernetes-core`
- `sre-slo`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
