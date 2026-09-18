---
name: security-logging-monitoring
description: "Build security logging and detection: audit trails, alerting on suspicious activity, tamper-resistance, no sensitive data in logs. Use for detection/monitoring."
---

# Security Logging Monitoring

**Category:** security

## Checklist

- Auth/authz events audited
- Alerts on anomalies (failed logins, privilege use)
- No secrets/PII in logs

## Common pitfalls

- No audit trail for sensitive actions
- Logging credentials/PII
- Logs mutable/deletable by attackers

## Related skills

- `observability-logging`
- `security-audit`
- `incident-response`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
