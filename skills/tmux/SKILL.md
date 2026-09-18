---
name: tmux
description: "Use tmux for terminal multiplexing: sessions, windows, panes, scripting layouts, persistence. Use for terminal workflow setup."
---

# Tmux

**Category:** tooling  ·  **Requires (detect first):** tmux

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `tmux`

## Key commands

```bash
tmux new-session -d -s dev
tmux split-window -h
```

## Common pitfalls

- Non-scriptable ad-hoc layouts
- Key-binding conflicts
- Losing work with no session persistence

## Related skills

- `cli-design`
- `shell-bash`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
