---
description: Audit dependencies for known vulnerabilities.
argument-hint: "[path]"
allowed-tools: Bash, Read
---

Audit dependencies in $ARGUMENTS using the `security-dependencies` skill. Run the ecosystem's auditor (npm audit / pip-audit / osv-scanner). Triage high/critical CVEs, distinguish exploitable from noise, and suggest safe upgrade paths. Note transitive risk.
