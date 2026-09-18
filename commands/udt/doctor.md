---
description: Detect installed tools/runtimes and report which UDT skills are actually usable.
argument-hint: "[--json]"
allowed-tools: Bash, Read
---

You are running the Ultimate Dev Toolkit doctor.

1. Run `node "${CLAUDE_PLUGIN_ROOT}/scripts/detect-tools.js"` (add `--json` if the user passed it in $ARGUMENTS).
2. Present a capability table: for each tool, show installed/missing and the detected version.
3. Summarize the OS/arch, primary detected runtimes, and how many UDT skills are consequently usable.
4. For anything missing that the user seems to need, give the install command. Never claim a tool is available if the probe failed.
