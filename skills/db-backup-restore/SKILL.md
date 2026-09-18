---
name: db-backup-restore
description: Plan and perform database backups and restores; verify recoverability. Use for backup/restore and DR tasks.
---

# Db Backup Restore

**Category:** databases  ·  **Requires (detect first):** pg_dump, mysqldump

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `pg_dump`
- `mysqldump`

## Key commands

```bash
pg_dump dbname > backup.sql
mysqldump dbname > backup.sql
```

## Checklist

- Backups tested by actually restoring
- Point-in-time recovery understood
- Backups encrypted and offsite

## Common pitfalls

- Never testing the restore (backup that doesn't work)
- Secrets/credentials leaking into dumps or logs
- No retention/rotation policy

## Related skills

- `db-postgres`
- `safe-execution`
- `cloud-aws`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
