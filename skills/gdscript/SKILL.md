---
name: gdscript
description: "Write GDScript for Godot game logic: nodes, signals, scenes, the game loop. Use for .gd files. Detect the godot binary first."
---

# Gdscript

**Category:** languages  ·  **Requires (detect first):** godot

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `godot`

## Key commands

```bash
godot --headless --script script.gd
godot --headless --check-only
```

## Checklist

- Work off the frame path where heavy
- Signals connected/disconnected correctly
- Node lifecycle respected

## Common pitfalls

- Heavy work in _process each frame
- Leaked signal connections
- Freed-node access

## Related skills

- `lua`
- `csharp`
- `make-interfaces-feel-better`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
