---
name: signal-processing
description: "Process signals: FFT, filtering, sampling/aliasing, windowing, spectrograms. Use for audio/DSP/sensor data."
---

# Signal Processing

**Category:** scientific  ·  **Requires (detect first):** python, ffmpeg, sox

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `ffmpeg`
- `sox`

## Key commands

```bash
python -c "from scipy import signal"
sox in.wav out.wav rate 16000
```

## Common pitfalls

- Aliasing from undersampling / no anti-alias filter
- Spectral leakage without windowing
- Wrong sample-rate assumptions

## Related skills

- `game-audio`
- `speech-processing`
- `numerical-methods`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
