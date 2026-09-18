---
name: direnv-envrc
description: "Manage per-directory environments with direnv (.envrc): auto-load env, nix/venv integration, secrets hygiene. Use for reproducible shells."
---

# Direnv Envrc

**Category:** tooling  ·  **Requires (detect first):** direnv

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `direnv`

## Key commands

```bash
direnv allow
direnv reload
```

## Common pitfalls

- Committing secrets in .envrc
- Forgetting direnv allow
- Global env leaking across projects

## Related skills

- `env-config-management`
- `nix-package-manager`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
