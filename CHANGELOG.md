# Changelog

All notable changes to this project are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/) and
[Semantic Versioning](https://semver.org/).

## [1.4.0] - 2026-09-18

### Added
- **Auto-update:** a SessionStart hook fast-forwards the plugin from GitHub each session (best-effort, fail-open; disable by removing the `auto-update` hook entry).
- Domain-vertical skills: healthcare (FHIR), fintech/payments, e-commerce, legal-tech, edtech, proptech, insurtech, adtech.
- Emerging-tech skills: TinyML/edge AI, AR filters, digital twins, IoT edge computing, spatial computing.
- Creative-code skills: generative art, creative coding, music programming, motion-graphics code, data art.
- Ops skills: FinOps, GreenOps/sustainability.
- Commands: domain (fhir-validate), fintech (pci-scope), ecom (inventory-audit), art (sketch), ml (tinyml), ops (finops/carbon), media (render).
- Agents: healthcare-fhir-reviewer, fintech-payments-reviewer, tinyml-reviewer, creative-code-reviewer, finops-analyst, ecommerce-reviewer.

### Changed
- Agents load extensibly; the generator/validator already glob `agents*.json`.
- Totals: **466 skills, 156 commands, 102 agents, 28 hooks, 4 connectors**.

## [1.3.0] - 2026-09-18

### Added
- Product/design skills: UX research, wireframing/prototyping, design tokens, figma-to-code, information architecture, usability testing, conversion optimization.
- Business/growth skills: product analytics, growth experimentation, SaaS metrics, pricing strategy, analytics instrumentation, CRM integration, customer feedback.
- Media/content skills: video processing, audio editing, markdown tooling, static-site generators, headless CMS, digital asset management.
- Realtime/networking skills: WebRTC, P2P networking, CDN/edge, QUIC/HTTP-3, network observability.
- Data-engineering skills: lakehouse, change-data-capture, data catalog, data contracts, data mesh.
- Commands: product (analytics-plan/funnel), media (convert/optimize), data (cdc/contract), net (webrtc-debug), perf (budget), qa (visual-diff), dev (i18n-extract/sitemap), cms (model).
- Agents: ux-reviewer, analytics-reviewer, webrtc-reviewer, data-contract-reviewer, media-pipeline-reviewer, growth-analyst, cdn-edge-reviewer, cms-reviewer.

### Changed
- Totals: **446 skills, 148 commands, 96 agents, 27 hooks, 4 connectors**.

## [1.2.0] - 2026-09-18

### Added
- Scientific skills: bioinformatics, quantum computing, computational geometry, GIS/geospatial, robotics (ROS 2), computer algebra, numerical methods, signal processing.
- Emerging languages: Elm, Gleam, Mojo, PureScript, Roc, Ballerina.
- Advanced data/ML skills: anomaly detection, causal inference, feature store, model monitoring, data versioning (DVC), synthetic data.
- Tooling & platform skills: Nix, just, direnv, tmux, Neovim config, dotfiles, platform engineering, Backstage, GitOps (Flux), secrets rotation, infra testing, Chaos Mesh.
- Commands: dev (diagram/env), data (profile/anomaly/versioning), sci (notebook/gis-inspect), tool (tasks), platform (scaffold), test (mutation/property), security (reverse).
- Agents: numerical-reviewer, data-quality-reviewer, nix-build-resolver, platform-engineer, bioinformatics-reviewer, reverse-engineering-analyst, gis-reviewer, signal-processing-reviewer.

### Changed
- Totals: **416 skills, 136 commands, 88 agents, 27 hooks, 4 connectors**.

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