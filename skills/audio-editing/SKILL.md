---
name: audio-editing
description: "Edit/process audio (FFmpeg/SoX/librosa): trim, normalize, denoise, format/rate conversion, loudness. Use for audio pipelines."
---

# Audio Editing

**Category:** media  ·  **Requires (detect first):** ffmpeg, sox

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ffmpeg`
- `sox`

## Key commands

```bash
ffmpeg -i in.wav -af loudnorm out.wav
sox in.wav out.wav norm
```

## Common pitfalls

- Clipping from over-normalization
- Sample-rate/format mismatches
- Loudness not standardized (LUFS)

## Related skills

- `signal-processing`
- `game-audio`
- `speech-processing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
