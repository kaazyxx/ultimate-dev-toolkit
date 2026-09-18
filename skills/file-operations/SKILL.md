---
name: file-operations
description: Safely read, search, compare, move, copy, rename, convert, compress, hash and inspect files and their metadata, with confirmation before destructive changes. Use for filesystem tasks.
---

# File Operations

**Category:** core  ·  **Requires (detect first):** node

Filesystem work with path-traversal checks and confirmation before anything is lost.

## When to use

- When searching, converting, comparing or bulk-processing files
- When moving/renaming/deleting where data could be lost
- To detect a file's real type, hash or metadata

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`

## Workflow

1. Resolve paths to absolute + canonical; refuse escapes outside the allowed root.
2. For reads/searches, stream large files instead of loading them whole.
3. For destructive ops, preview the exact targets and confirm.
4. Detect type by content (magic bytes) when the extension is unreliable.

## Key commands

```bash
certutil -hashfile <file> SHA256   # Windows
sha256sum <file>                   # POSIX
```

## Checklist

- No path escapes the intended root
- Destructive change previewed and confirmed
- Large files streamed, not slurped

## Common pitfalls

- Trusting the file extension for type detection
- Overwriting a target during move/copy without checking it exists

## Related skills

- `safe-execution`
- `security-audit`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
