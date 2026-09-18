---
description: List EC2 instances with state, type and cost signals.
argument-hint: "[--region r]"
allowed-tools: Bash
---

List EC2 instances for $ARGUMENTS using the `cloud-aws` skill. Run `aws ec2 describe-instances` and summarize id, state, type, and anything idle/oversized worth cost review. Read-only; never start/stop/terminate instances.
