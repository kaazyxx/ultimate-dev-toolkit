---
name: security-sast
description: "Run static application security testing (Semgrep/CodeQL): rules, triage, false positives. Use to scan source for vulnerabilities."
---

# Security Sast

**Category:** security  ·  **Requires (detect first):** semgrep

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `semgrep`

## Key commands

```bash
semgrep --config auto .
```

## Checklist

- Relevant rulesets enabled
- Findings triaged (true vs false positive)
- Integrated into CI

## Common pitfalls

- Alert fatigue from unfiltered rules
- Suppressing real findings to pass CI

## Related skills

- `security-audit`
- `ci-cd-pipeline-design`
- `code-review-playbook`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
