---
name: shell-powershell
description: Write PowerShell (5.1 and 7+) scripts and cmdlets with proper error handling and object pipelines. Use for .ps1/.psm1 files on Windows or cross-platform pwsh.
---

# Shell Powershell

**Category:** languages  ·  **Requires (detect first):** pwsh, powershell, PSScriptAnalyzer

Object-pipeline PowerShell with real error handling.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `pwsh`
- `powershell`
- `PSScriptAnalyzer`

## Key commands

```bash
pwsh -NoProfile -File script.ps1
Invoke-ScriptAnalyzer -Path script.ps1
```

## Checklist

- $ErrorActionPreference and try/catch used
- Objects passed, not text-parsed
- Approved Verb-Noun cmdlet names

## Common pitfalls

- Assuming 5.1 vs 7 feature parity
- Silent failures from -ErrorAction SilentlyContinue
- Native stderr redirection quirks in 5.1

## Related skills

- `shell-bash`
- `automation-scripting`
- `windows-admin`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
