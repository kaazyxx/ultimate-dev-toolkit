---
name: nix-package-manager
description: "Use Nix/NixOS for reproducible builds and dev environments: flakes, derivations, shells. Use for nix files. Detect nix first."
---

# Nix Package Manager

**Category:** tooling  ·  **Requires (detect first):** nix

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `nix`

## Key commands

```bash
nix build
nix flake check
nix develop
```

## Common pitfalls

- Impure builds breaking reproducibility
- Unpinned flake inputs
- Massive rebuilds from cache misses

## Related skills

- `env-config-management`
- `docker-fundamentals`
- `package-managers`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
