---
description: "Analyze game performance: frame time, draw calls, GC, hotspots."
argument-hint: "[target]"
allowed-tools: Read, Grep, Glob, Bash
---

Analyze game performance for $ARGUMENTS using the `game-loop-patterns`/`performance-profiling` skills. Look for per-frame allocations (GC hitches), update-loop hotspots, excessive draw calls, and physics cost. Report the dominant frame-time cost and concrete fixes, measured where possible.
