---
name: game-audio
description: "Implement game audio: mixing, spatial/3D sound, DSP, latency, middleware (FMOD/Wwise). Use for game sound systems."
---

# Game Audio

**Category:** game-graphics

## Checklist

- Low-latency audio path
- Voice limiting/pooling
- 3D attenuation/occlusion correct

## Common pitfalls

- Too many concurrent voices (CPU/clipping)
- Loading uncompressed audio into memory
- Audio thread blocked by game logic

## Related skills

- `game-loop-patterns`
- `speech-processing`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
