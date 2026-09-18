---
description: "Prepare a release: bump version, changelog, tag (with confirmation)."
argument-hint: "<major|minor|patch>"
allowed-tools: Bash, Read, Edit
---

Prepare a release per $ARGUMENTS using the `versioning-semver`/`changelog-release` skills. Bump the version consistently (manifest + README + CHANGELOG), update the changelog, and propose the tag/commit. Show everything and require confirmation before tagging or pushing. Never push automatically.
