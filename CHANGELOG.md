# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/) and
[Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-09-18

### Added
- Game & graphics skills: Unity, Unreal, Godot, Three.js, WebGL/shader programming, physics simulation, procedural generation, sprite animation, game audio, game networking, WebXR/AR-VR.
- Web3 skills: ethers/viem, smart-contract testing, DeFi patterns, NFT metadata, wallet integration, blockchain indexing.
- Embedded/IoT skills: Arduino, embedded C, RTOS firmware, MQTT, Raspberry Pi.
- AI skills: MCP server dev, agent orchestration, vector databases, image generation, speech processing, OCR, function-calling.
- Commands: web3 (compile/test/audit), ai (mcp-scaffold/prompt-test), embedded (flash/monitor), game (profile), dev (changelog/release/todos/deps-graph).
- Agents: solidity-auditor, web3-reviewer, embedded-reviewer, shader-reviewer, game-reviewer, threejs-reviewer, unity-reviewer, mcp-server-builder.

### Changed
- Generator and validator now load agents from `agents*.json` (extensible like skills/commands).
- Totals: **384 skills, 124 commands, 80 agents, 27 hooks, 4 connectors**.

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