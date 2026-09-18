---
name: security-supply-chain
description: "Harden the software supply chain: pinned deps, SBOM, signing, provenance, CI trust boundaries. Use to reduce build/dependency attack surface."
---

# Security Supply Chain

**Category:** security  ·  **Requires (detect first):** cosign, syft

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cosign`
- `syft`

## Key commands

```bash
syft dir:.
cosign verify <image>
```

## Checklist

- Dependencies/actions pinned by digest
- SBOM generated; artifacts signed
- CI secrets least-privileged

## Common pitfalls

- Unpinned CI actions/base images
- No provenance/signing
- Overprivileged CI tokens

## Related skills

- `security-dependencies`
- `artifact-registry-ops`
- `ci-cd-github-actions`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
