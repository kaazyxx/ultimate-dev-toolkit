<div align="center">

<img src="https://capsule-render.vercel.app/api?type=venom&color=gradient&customColorList=12,20,24,30&height=180&section=header&text=Ultimate%20Dev%20Toolkit&fontSize=46&fontColor=ffffff&desc=security-first%20universal%20toolkit%20for%20Claude%20Code&descSize=18&descAlignY=64" alt="Ultimate Dev Toolkit" />

<p>
  <img alt="version" src="https://img.shields.io/badge/version-1.0.0-7aa2f7?style=for-the-badge&labelColor=1a1b27" />
  <img alt="license" src="https://img.shields.io/badge/license-MIT-9ece6a?style=for-the-badge&labelColor=1a1b27" />
  <img alt="platform" src="https://img.shields.io/badge/Claude%20Code-plugin-bb9af7?style=for-the-badge&labelColor=1a1b27&logo=anthropic&logoColor=white" />
  <img alt="node" src="https://img.shields.io/badge/node-%E2%89%A518-9ece6a?style=for-the-badge&labelColor=1a1b27&logo=nodedotjs&logoColor=white" />
</p>

<p>
  <img alt="skills" src="https://img.shields.io/badge/skills-353-7aa2f7?style=flat-square&labelColor=1a1b27" />
  <img alt="commands" src="https://img.shields.io/badge/commands-112-7dcfff?style=flat-square&labelColor=1a1b27" />
  <img alt="agents" src="https://img.shields.io/badge/agents-72-bb9af7?style=flat-square&labelColor=1a1b27" />
  <img alt="hooks" src="https://img.shields.io/badge/hooks-27-e0af68?style=flat-square&labelColor=1a1b27" />
  <img alt="connectors" src="https://img.shields.io/badge/connectors-4-9ece6a?style=flat-square&labelColor=1a1b27" />
  <a href="https://github.com/kaazyxx/ultimate-dev-toolkit/stargazers"><img alt="stars" src="https://img.shields.io/github/stars/kaazyxx/ultimate-dev-toolkit?style=flat-square&labelColor=1a1b27&color=f7768e&label=%E2%98%85" /></a>
</p>

<em>skills · slash commands · specialist agents · safety hooks · MCP connectors — for coding, git,
Docker, databases, security, testing, DevOps, cloud, data/ML and more.</em>

</div>

<br/>

---

## What this is (and what it is not)

UDT is **not** a compiled program. It is a set of Markdown instructions and
manifests that Claude Code loads: *skills* (domain playbooks Claude reads on
demand), *slash commands* (parameterized entry points typed as `/category:name`),
*subagents* (focused reviewers with their own context), *hooks* (deterministic
safety guards) and *connectors* (MCP servers). It is designed so hundreds of
capabilities can be added **without rewriting the core**.

Four non-negotiable principles:

1. **Honesty over hype.** UDT never claims a language or tool is supported unless
   it is actually installed. `/udt:doctor` runs real version probes
   (`scripts/detect-tools.js`) and reports only what is truly present.
2. **Security by default.** Destructive actions confirm first, arguments are
   validated, secrets are redacted, and an audit trail is kept. Protections are
   never disabled to make a command "more powerful". See [docs/security.md](docs/security.md).
3. **Modular & extensible.** Adding a skill/command/agent is a data edit plus a
   rebuild; third parties ship self-contained [`extensions/`](extensions/README.md).
4. **Ergonomics.** Consistent `/category:verb` naming and self-generating help.

> Every skill, command and agent is a real, content-ful instruction file — not an
> empty stub. The catalog is generated from authored data so it stays consistent
> and honest as it grows.

---

## Install

```
/plugin marketplace add /absolute/path/to/ultimate-dev-toolkit
/plugin install ultimate-dev-toolkit
```

or from GitHub:

```
/plugin marketplace add kaazuxx77-ctrl/ultimate-dev-toolkit
/plugin install ultimate-dev-toolkit
```

Then:

```
/udt:doctor       # what is installed + which skills apply
/udt:help         # browse every command
```

Full guide: [docs/installation.md](docs/installation.md). Requires **Node.js 18+**
for the doctor, the catalog generator and the advisory hooks.

---

## Quick start

```
/udt:doctor
/dev:analyze ./src
/dev:debug --file app.py --line 42 --error "KeyError: user"
/git:review
/security:audit
/dev:test --path ./src
```

---

## What's inside

**Commands** (`/category:name`, full list in [docs/commands.md](docs/commands.md)):

| Category | Examples |
| --- | --- |
| `udt` | `doctor`, `help`, `registry`, `config` |
| `dev` | `analyze`, `debug`, `refactor`, `review`, `test`, `fix`, `generate`, `document`, `optimize`, ... |
| `git` | `status`, `review`, `commit`, `diff`, `bisect`, `undo`, `sync`, `pr-prep`, ... |
| `db` | `inspect`, `query`, `schema`, `optimize`, `migrate`, `backup` |
| `docker` | `inspect`, `build`, `logs`, `troubleshoot`, `compose` |
| `security` | `audit`, `secrets`, `deps`, `headers`, `threat-model` |
| `files` · `system` · `pipeline` · `project` · `cloud` · `ci` · `test` · `api` | search, inspect, run, detect, deploy, coverage, design, ... |

**Skills** — core (environment-detection, safe-execution, pipelines), engineering,
40+ languages, web front/back-end, databases, DevOps, data/ML/AI, security,
mobile/desktop/cloud platforms, tooling, architecture and testing. Full list:
[docs/skills.md](docs/skills.md).

**Agents** — a general `code-reviewer`, `debug-detective`, `security-auditor`,
plus per-language reviewers, framework reviewers and build-resolvers. Full list:
[docs/agents.md](docs/agents.md).

**Hooks** — advisory safety guards (destructive-command reminders, secret-write
warnings) and an audit trail, backed by one fast dispatcher. Never block by
default. See [docs/security.md](docs/security.md).

**Connectors** — three zero-config MCP servers (`sequential-thinking`, `memory`,
`filesystem`) declared in [`.claude-plugin/plugin.json`](.claude-plugin/plugin.json).

---

## How it fits together

```
scripts/catalog/*.json  ->  scripts/build-catalog.mjs  ->  skills/  commands/  agents/  docs/
```

The catalog is authored as data; the generator validates it (unique names,
required fields), renders every `SKILL.md`/command/agent, and regenerates the
reference docs. This is the command registry and the auto-documentation in one.
See [docs/architecture.md](docs/architecture.md).

Rebuild after editing the catalog:

```
npm run build   # regenerate + validate
npm test        # structural checks + count thresholds
npm run doctor  # environment report
```

---

## Extending

Add a capability by editing `scripts/catalog/*.json` and rebuilding, or ship a
self-contained extension under [`extensions/`](extensions/README.md) (a working
template is included). Guide: [docs/extending.md](docs/extending.md).

---

## Documentation

| Doc | Purpose |
| --- | --- |
| [architecture.md](docs/architecture.md) | How the pieces fit together |
| [installation.md](docs/installation.md) | Install & the doctor check |
| [configuration.md](docs/configuration.md) | `udt.config.yaml` reference |
| [security.md](docs/security.md) | Threat model & safety guarantees |
| [extending.md](docs/extending.md) | Build a skill / command / agent / extension |
| [troubleshooting.md](docs/troubleshooting.md) | Common problems |
| [skills.md](docs/skills.md) · [commands.md](docs/commands.md) · [agents.md](docs/agents.md) | Generated reference |

## License

MIT — see [LICENSE](LICENSE).
