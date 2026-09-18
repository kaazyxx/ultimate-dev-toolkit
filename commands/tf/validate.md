---
description: Validate and format Terraform configuration.
argument-hint: "[dir]"
allowed-tools: Bash
---

Validate Terraform for $ARGUMENTS using the `iac-terraform` skill: run `terraform fmt -check` and `terraform validate`, and report syntax/formatting issues and any obvious misconfigurations. Read-only.
