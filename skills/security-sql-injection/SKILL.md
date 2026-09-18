---
name: security-sql-injection
description: "Prevent SQL/NoSQL injection: parameterized queries, ORMs, no string concatenation, least-privilege DB users. Use when building queries."
---

# Security Sql Injection

**Category:** security

## Checklist

- Parameterized queries/prepared statements
- No user input concatenated into queries
- DB user has least privilege

## Common pitfalls

- Building SQL by string interpolation
- Trusting ORMs then dropping to raw concat
- Over-privileged DB accounts

## Related skills

- `security-web`
- `sql`
- `db-orm-patterns`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
