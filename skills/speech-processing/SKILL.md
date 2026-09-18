---
name: speech-processing
description: "Build speech features: speech-to-text (Whisper), text-to-speech, diarization, streaming, latency. Use for voice/audio AI."
---

# Speech Processing

**Category:** ai  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Streaming vs batch chosen for latency
- Audio format/sample rate correct
- Handle noisy/multilingual input

## Common pitfalls

- Wrong sample rate degrading accuracy
- No handling of long audio (chunking)
- Ignoring latency for realtime UX

## Related skills

- `ai-api-integration`
- `nlp-fundamentals`
- `game-audio`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
