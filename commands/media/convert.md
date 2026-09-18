---
description: Transcode/convert media with the right codec and settings.
argument-hint: "<file> --to <format>"
allowed-tools: Bash, Read
---

Convert the media file in $ARGUMENTS using the `video-processing`/`audio-editing` skills. Detect ffmpeg, pick a codec/container/bitrate suited to the target, prefer stream-copy when possible, and preserve quality. Confirm before overwriting an existing target and report the result.
