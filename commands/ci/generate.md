---
description: Generate a CI workflow tailored to the detected stack.
argument-hint: "[github|gitlab]"
allowed-tools: Read, Glob, Write
---

Generate a CI workflow for the detected stack using the `ci-cd-pipeline-design` skill. Include lint, test and build with caching and least-privilege tokens; pin third-party actions. Target the provider in $ARGUMENTS (default: GitHub Actions). Explain each stage.
