---
name: game-unity
description: "Build games in Unity (C#): MonoBehaviour lifecycle, prefabs, physics, scenes, the update loop, profiling. Use for Unity projects and .cs game scripts. Detect Unity before claiming you can build."
---

# Game Unity

**Category:** game-graphics  ·  **Requires (detect first):** Unity, dotnet

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `Unity`
- `dotnet`

## Key commands

```bash
dotnet build
Unity -batchmode -quit -projectPath . -buildTarget
```

## Checklist

- Work off Update where possible (cache, pool objects)
- Physics in FixedUpdate
- No per-frame allocations (GC spikes)

## Common pitfalls

- GetComponent/Find in Update (slow)
- Allocating in the update loop causing GC hitches
- Frame-rate-dependent movement without deltaTime

## Related skills

- `csharp`
- `game-loop-patterns`
- `physics-simulation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
