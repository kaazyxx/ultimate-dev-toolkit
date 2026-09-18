---
name: dotfiles-management
description: "Manage dotfiles reproducibly (chezmoi/stow/bare git): symlinks, templating, secrets, multi-machine. Use for dotfiles setup."
---

# Dotfiles Management

**Category:** tooling  ·  **Requires (detect first):** chezmoi, stow

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `chezmoi`
- `stow`

## Key commands

```bash
stow nvim
chezmoi apply
```

## Common pitfalls

- Committing secrets in dotfiles
- Broken symlinks across machines
- No templating for per-host differences

## Related skills

- `direnv-envrc`
- `neovim-config`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
