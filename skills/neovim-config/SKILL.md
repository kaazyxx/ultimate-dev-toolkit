---
name: neovim-config
description: "Configure Neovim (Lua): plugins, LSP, treesitter, keymaps, performance. Use for init.lua/nvim config."
---

# Neovim Config

**Category:** tooling  ·  **Requires (detect first):** nvim

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `nvim`

## Key commands

```bash
nvim --headless "+checkhealth" +qa
```

## Common pitfalls

- Slow startup from eager plugin loading
- LSP/treesitter misconfig
- Unpinned plugin versions

## Related skills

- `lua`
- `dotfiles-management`
- `tmux`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
