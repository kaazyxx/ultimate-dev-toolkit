---
name: security-dast
description: "Run dynamic application security testing against a running app (authorized only): scanning, fuzzing endpoints. Use for authorized black-box testing."
---

# Security Dast

**Category:** security  ·  **Requires (detect first):** nikto, zap

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `nikto`
- `zap`

## Key commands

```bash
nikto -h http://localhost:8080
```

## Checklist

- Explicit authorization to test the target
- Non-prod/staging where possible
- Findings validated manually

## Common pitfalls

- Scanning systems without authorization
- Running destructive scans against prod

## Related skills

- `security-web`
- `security-audit`
- `security-pentest-recon`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
