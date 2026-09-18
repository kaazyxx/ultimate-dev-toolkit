---
name: db-sqlite
description: "Use SQLite for embedded/local storage: pragmas, WAL, types, limitations. Use for .db/.sqlite files. Detect sqlite3 first."
---

# Db Sqlite

**Category:** databases  ·  **Requires (detect first):** sqlite3

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `sqlite3`

## Key commands

```bash
sqlite3 app.db ".schema"
sqlite3 app.db "PRAGMA integrity_check;"
```

## Checklist

- WAL mode for concurrency
- Foreign keys pragma enabled
- Types understood (dynamic typing)

## Common pitfalls

- Assuming strict typing (SQLite is flexible)
- Single-writer contention under load
- Foreign keys off by default

## Related skills

- `sql`
- `db-postgres`
- `file-operations`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
