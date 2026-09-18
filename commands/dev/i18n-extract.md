---
description: Find hardcoded strings and prepare them for translation.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob
---

Scan $ARGUMENTS for hardcoded user-facing strings using the `i18n-l10n` skill. List strings that should be externalized to message catalogs, flag concatenation/pluralization issues, and propose keys. Report findings; don't rewrite without confirmation.
