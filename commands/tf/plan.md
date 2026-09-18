---
description: Run terraform plan and review the change for safety.
argument-hint: "[dir]"
allowed-tools: Bash, Read
---

Run and review `terraform plan` for $ARGUMENTS using the `iac-terraform` skill. Detect terraform/tofu, init if needed, and summarize what will be created/changed/destroyed. Flag any replace/destroy of stateful resources. Never run apply automatically.
