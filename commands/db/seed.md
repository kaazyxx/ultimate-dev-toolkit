---
description: Generate or run seed/fixture data for a schema (non-production).
argument-hint: "[table]"
allowed-tools: Read, Bash, Write
---

Create seed/fixture data for $ARGUMENTS. Match the real schema and constraints, use realistic but synthetic values (never real PII), and keep it idempotent. Confirm the target is a dev/test database before inserting.
