---
name: game-godot-engine
description: "Build games in Godot (GDScript/C#): nodes, scenes, signals, the game loop, physics bodies. Use for Godot projects beyond a single script."
---

# Game Godot Engine

**Category:** game-graphics  ·  **Requires (detect first):** godot

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `godot`

## Key commands

```bash
godot --headless --export-release
godot --headless --check-only
```

## Checklist

- Scene/node composition kept shallow
- Signals connected/disconnected cleanly
- _physics_process for physics, _process for frame work

## Common pitfalls

- Heavy work in _process each frame
- Freed-node access
- Overusing get_node string paths

## Related skills

- `gdscript`
- `game-loop-patterns`
- `make-interfaces-feel-better`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
