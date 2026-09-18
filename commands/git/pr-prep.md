---
description: "Prepare a branch for a pull request: summary, checklist, diff review."
argument-hint: "[base]"
allowed-tools: Bash, Read
---

Prepare the current branch for a PR against the base in $ARGUMENTS (default: main).

Review the full diff vs base, summarize the change for reviewers, list any follow-ups/risks, and run available lint/tests. Flag secrets or debug code. Produce a draft PR title and description; do not push or open the PR unless the user asks.
