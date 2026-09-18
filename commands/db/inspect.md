---
description: "Connect (read-only) and describe a database's schema, tables and sizes."
argument-hint: "[connection-or-dsn]"
allowed-tools: Bash, Read
---

Inspect the database referenced in $ARGUMENTS using the `database-tools` skills. Detect the client (psql/mysql/sqlite3/mongosh) first. Run read-only introspection to list schemas/tables, row counts and sizes, and key indexes. Never print credentials/connection strings in full; redact secrets.
