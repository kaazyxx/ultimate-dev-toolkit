---
name: video-processing
description: "Process video with FFmpeg: transcode, trim, scale, codecs, HLS/DASH, subtitles. Use for video pipelines. Detect ffmpeg first."
---

# Video Processing

**Category:** media  ·  **Requires (detect first):** ffmpeg, ffprobe

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ffmpeg`
- `ffprobe`

## Key commands

```bash
ffprobe input.mp4
ffmpeg -i in.mp4 -c:v libx264 -crf 23 out.mp4
```

## Common pitfalls

- Wrong codec/container for the target
- Re-encoding when a stream copy would do
- Ignoring HDR/color space

## Related skills

- `signal-processing`
- `image-processing`
- `web-performance`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
