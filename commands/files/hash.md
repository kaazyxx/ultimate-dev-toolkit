---
description: "Compute and/or verify a file's checksum."
argument-hint: "<file> [expected-hash]"
allowed-tools: Bash
---

Compute the SHA-256 of the file in $ARGUMENTS (certutil on Windows, sha256sum on POSIX). If an expected hash is given, compare and clearly state match/mismatch. Useful for integrity checks of downloads/artifacts.
