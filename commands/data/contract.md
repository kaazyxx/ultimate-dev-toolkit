---
description: Define or validate a data contract between producer and consumer.
argument-hint: "[dataset]"
allowed-tools: Read, Write, Bash
---

Define or validate a data contract for $ARGUMENTS using the `data-contracts` skill. Capture the schema, freshness/quality SLAs and versioning, and wire an enforcement check (schema validation in CI) so breaking changes fail fast. Report the contract and how it's enforced.
