---
description: Show the current AWS identity, account and region.
allowed-tools: Bash
---

Show the active AWS identity using the `cloud-aws` skill. Detect the aws CLI first. Run `aws sts get-caller-identity` and `aws configure list` (redacting any secret). Report the account, ARN and default region. Read-only.
