---
description: Summarize cloud account resources for the detected provider (read-only).
argument-hint: "[aws|azure|gcp]"
allowed-tools: Bash
---

Inspect cloud resources for the provider in $ARGUMENTS using the relevant `cloud-*` skill. Detect the CLI (aws/az/gcloud) and identity first. List key resources read-only. Redact account identifiers/secrets. Never create, modify or delete resources here.
