---
name: shell-bash
description: Write robust, portable Bash/POSIX shell scripts with strict mode and shellcheck. Use for .sh files and shell one-liners on POSIX systems.
---

# Shell Bash

**Category:** languages  ·  **Requires (detect first):** bash, shellcheck, shfmt

Safe Bash: strict mode, quoted expansions, shellcheck clean.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `bash`
- `shellcheck`
- `shfmt`

## Key commands

```bash
shellcheck script.sh
shfmt -d script.sh
bash -n script.sh
```

## Checklist

- set -euo pipefail at top
- All variable expansions quoted
- shellcheck clean

## Common pitfalls

- Unquoted $var causing word-splitting/globbing
- Parsing ls output
- Ignoring non-zero exit in pipelines

## Related skills

- `shell-powershell`
- `automation-scripting`
- `safe-execution`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
