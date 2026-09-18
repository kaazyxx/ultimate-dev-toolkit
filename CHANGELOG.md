# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/) and
[Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-09-17

### Added
- Initial release of the Ultimate Dev Toolkit Claude Code plugin.
- Core skills: environment-detection, safe-execution, command-registry, pipelines.
- Capability skills: code-analysis, debugging, refactoring, code-generation,
  documentation-writer, testing-strategy, git-workflows, docker-ops, ci-cd,
  cloud-ops, database-tools, security-audit, file-operations, observability,
  api-development, ml-data-science, web-scraping.
- Language skills: python, javascript-typescript, rust, go, cpp, java-kotlin,
  csharp-dotnet, ruby, php, shell, sql.
- Slash commands grouped by category (dev, git, db, docker, security, files,
  system, pipeline, project) plus /udt:doctor and /udt:help.
- Specialist agents: code-reviewer, debug-detective, security-auditor,
  refactor-specialist, test-engineer.
- Safety hooks for destructive-command confirmation and secret redaction.
- Runnable detection script (scripts/detect-tools.js) backing the doctor command.
- Extension system with a working example extension.
- Full documentation set under docs/.