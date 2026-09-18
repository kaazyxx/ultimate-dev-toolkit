---
name: infra-testing
description: "Test infrastructure code: terratest, kitchen, policy-as-code (OPA/Conftest), plan validation. Use for IaC test suites."
---

# Infra Testing

**Category:** devops  ·  **Requires (detect first):** go, conftest

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `go`
- `conftest`

## Key commands

```bash
go test ./...
conftest test plan.json
```

## Common pitfalls

- Applying IaC with no tests
- No policy checks on plans
- Tests that cost money (real cloud) unbounded

## Related skills

- `iac-terraform`
- `ci-cd-pipeline-design`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
