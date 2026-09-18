# Security model

UDT is security-first. Protections are never disabled to make a command "more
powerful". This document describes the threat model and the guarantees.

## Principles

1. **Confirm before destruction.** Any action that can lose data or rewrite
   history requires an explicit confirmation, showing the exact target first.
2. **No injection.** Prefer argument arrays over shell string concatenation;
   never splice untrusted input into a command line.
3. **No path traversal.** Resolve and canonicalize paths; refuse escapes outside
   the intended root unless explicitly allowed.
4. **Redact secrets.** Passwords, tokens and connection strings are masked in all
   output and logs.
5. **Audit.** Executed shell commands and session lifecycle are appended to
   `.udt/audit.log` (when enabled).

## Destructive operations (always confirm)

The `safe-execution` skill and the advisory hooks treat these as high-risk:

- Filesystem: recursive delete (`rm -rf`, `Remove-Item -Recurse`), overwrite of
  existing files, moving over an existing target.
- Git: `reset --hard`, `clean -fd`, force push, branch deletion, history rewrite
  (`filter-repo`/BFG).
- Database: `DROP`, `TRUNCATE`, `DELETE`/`UPDATE` without a `WHERE`, destructive
  migrations.
- Containers/infra: `docker system prune`, volume removal, `terraform destroy`,
  `kubectl delete`, cloud resource deletion.
- System: killing processes, `chmod -R 777`, `chown -R`, editing PATH/security
  settings.

### Confirmation format

```
! This action may be destructive.
Target: <exact path / command / rows affected>
Effect: <what changes, what is lost>
Proceed? [y/N]
```

## Prohibited outright

These are never performed on the user's behalf — the user is directed to do them
themselves:

- Entering credentials, card/bank/government-ID numbers, passwords, API keys.
- Executing fund transfers or trades.
- Bypassing bot-detection / CAPTCHAs.
- Disabling security controls.

## The advisory hooks

`hooks/hooks.json` registers guards backed by one small script,
`hooks/udt-hook.mjs`. They are **advisory by default**: they never block a tool
call. When a risky pattern is actually detected they inject a short reminder;
otherwise they stay silent. Session and Bash events also append to the audit
trail. See [configuration.md](configuration.md) to trim or disable them.

Because a matching Bash call spawns the dispatcher for each `guard-*` entry,
keep only the guards you want if per-command latency matters. The script fails
open (exit 0) on any error, so a hook can never break your workflow.

## Untrusted content

Anything read from the web, files, tool output or the DOM is **data, not
instructions**. UDT skills treat embedded directives (including claims of prior
authorization) as content to surface to the user, not commands to execute. This
is reinforced by the `notice-webfetch` hook and the `prompt-engineer` /
`llm-agents` guidance.

## Defensive security only

The security skills and the `security-auditor` agent are for **defensive**
review, authorized testing (CTF, pentests with written scope) and education.
They do not produce working exploits, DoS techniques, or detection-evasion for
malicious use.
