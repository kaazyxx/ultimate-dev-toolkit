---
description: Back up a database safely and verify the dump.
argument-hint: "[db]"
allowed-tools: Bash
---

Back up the database in $ARGUMENTS using the `db-backup-restore` skill. Use the correct dump tool (pg_dump/mysqldump/etc.), write to a safe location, and verify the dump is non-empty/valid. Redact credentials in any output. Remind the user a backup is only real once a restore has been tested.
