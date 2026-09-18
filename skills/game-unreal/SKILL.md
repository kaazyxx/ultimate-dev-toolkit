---
name: game-unreal
description: "Build games in Unreal Engine (C++/Blueprints): actors, components, gameplay framework, ticking, replication. Use for Unreal projects and .cpp/.h gameplay code."
---

# Game Unreal

**Category:** game-graphics  ·  **Requires (detect first):** UnrealBuildTool

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `UnrealBuildTool`

## Checklist

- Expensive work off Tick; use timers/events
- Object lifetime/GC (UPROPERTY) correct
- Replication set for multiplayer state

## Common pitfalls

- Heavy logic every Tick
- Dangling pointers without UPROPERTY GC tracking
- Blueprint spaghetti where C++ fits

## Related skills

- `cpp`
- `game-loop-patterns`
- `game-networking`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
