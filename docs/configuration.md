# Configuration

The optional `udt.config.yaml` at the repo root documents defaults and lets you
toggle skill groups. It is advisory — the skills and hooks honor it as guidance,
and security options are never silently turned off.

```yaml
security:
  confirmation_required: true   # confirm before destructive actions
  redact_secrets: true          # mask tokens/passwords/DSNs in output
  audit_log: true               # append to .udt/audit.log

skills:
  languages: true
  databases: true
  devops: true
  # ...toggle whole groups

extensions:
  autodiscover: true
```

## What is honored where

- `security.*` — reinforced by the `safe-execution` skill and the advisory
  hooks. Turning `confirmation_required` off is discouraged; the skills still
  treat clearly destructive actions with care.
- `skills.*` — a hint about which groups you use. Skills also self-disable when
  their `required_tools` are not detected by `/udt:doctor`.

## Disabling hooks

The advisory hooks live in `hooks/hooks.json`. To reduce per-command overhead,
delete the entries you do not want (for example, keep only the `guard-*` Bash
entries you care about). Hooks never block by default — they only add short
reminders and an audit trail.

## The audit log

When `audit_log` is on, executed shell commands and session lifecycle events are
appended to `.udt/audit.log` in the project. That directory is git-ignored.