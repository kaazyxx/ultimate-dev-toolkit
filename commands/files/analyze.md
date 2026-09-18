---
description: "Detect a file's real type, encoding, size and metadata."
argument-hint: "<file>"
allowed-tools: Read, Bash
---

Analyze the file in $ARGUMENTS using the `file-operations` skill. Detect the real type by content (not just extension), report encoding, size, line count and relevant metadata, and note anything unusual (binary in a text path, wrong encoding, embedded secrets).
