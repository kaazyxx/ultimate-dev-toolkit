---
description: Generate or update a changelog from commit history.
argument-hint: "[since-tag]"
allowed-tools: Bash, Read, Edit
---

Generate/update the changelog for $ARGUMENTS using the `changelog-release` skill. Read git history since the last tag, group changes (feat/fix/docs/etc.), and write user-facing entries. Follow Keep a Changelog + SemVer. Show the diff before writing.
