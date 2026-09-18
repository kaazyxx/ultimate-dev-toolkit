---
description: Review staged/unstaged changes before committing.
argument-hint: "[--staged]"
allowed-tools: Bash, Read
---

Review local git changes using the `code-review-playbook` skill.

Run `git diff` (or `git diff --staged` if requested in $ARGUMENTS). Review for correctness, security, leftover debug code, and secrets. Report blocking issues vs. nits. Explicitly flag any secret/credential that appears in the diff and advise not to commit it.
