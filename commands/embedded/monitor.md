---
description: Open a serial monitor and analyze device output.
argument-hint: "<port> [baud]"
allowed-tools: Bash
---

Monitor serial output for the device in $ARGUMENTS. Open the serial port at the right baud, capture output, and analyze it with the `log-analysis` skill (errors, resets, watchdog). Redact any secrets. Read-only observation.
