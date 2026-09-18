---
description: Build and flash firmware to a connected device (with confirmation).
argument-hint: "[port]"
allowed-tools: Bash
---

Build and flash firmware for $ARGUMENTS using the `arduino`/`embedded-c` skills. Detect the toolchain (arduino-cli / platformio / openocd). Compile first, show what will be flashed and the target port, and confirm before writing to the device. Report success and any bootloader errors.
