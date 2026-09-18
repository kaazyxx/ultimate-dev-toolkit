---
description: Defensive triage of a binary/artifact (authorized only).
argument-hint: "<file>"
allowed-tools: Read, Bash
---

Do a defensive triage of the artifact in $ARGUMENTS for security review (authorized/owned artifacts only). Inspect type, strings, imports, and obvious indicators using standard tools. Report findings for defense; do not produce offensive tooling or work on artifacts you're not authorized to analyze.
