---
description: Show or explain UDT configuration (udt.config.yaml) and how to change it.
argument-hint: "[key]"
allowed-tools: Read
---

Handle UDT configuration.

- Read `udt.config.yaml` if present (else describe the defaults from `docs/configuration.md`).
- With no argument: summarize the effective config (security flags, enabled skill groups).
- With a key in $ARGUMENTS: explain that setting, its default and effect. Do not disable security options just to make something work; explain the tradeoff instead.
