---
name: lua
description: Write and debug Lua for scripting and embedding (LOVE, Neovim, game hosts). Use for .lua files. Detect lua/luajit before executing.
---

# Lua

**Category:** languages  ·  **Requires (detect first):** lua, luajit, luacheck

Small, embeddable scripting with careful global hygiene.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `lua`
- `luajit`
- `luacheck`

## Key commands

```bash
lua script.lua
luajit script.lua
luacheck .
```

## Checklist

- Locals used instead of accidental globals
- 1-based indexing accounted for
- nil handling explicit

## Common pitfalls

- Accidental globals from missing local
- Off-by-one from 1-based arrays
- Confusing nil vs false

## Related skills

- `javascript`
- `shell-bash`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
