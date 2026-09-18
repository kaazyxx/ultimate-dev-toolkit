---
name: artifact-registry-ops
description: "Manage package/artifact/image registries: versioning, retention, promotion, signing. Use for registry and release-artifact ops."
---

# Artifact Registry Ops

**Category:** devops  ·  **Requires (detect first):** docker, cosign

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `docker`
- `cosign`

## Key commands

```bash
docker push registry/app:1.2.3
cosign verify registry/app:1.2.3
```

## Checklist

- Immutable, versioned tags
- Artifacts signed and verified
- Retention/cleanup policy

## Common pitfalls

- Mutable latest tags in prod
- Unsigned artifacts
- Unbounded storage growth

## Related skills

- `docker-image-optimization`
- `security-supply-chain`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
