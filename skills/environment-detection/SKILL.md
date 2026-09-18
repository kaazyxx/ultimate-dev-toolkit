---
name: environment-detection
description: Detect the real OS, CPU, runtimes, compilers, package managers, containers, databases and project type before doing anything. Use at the start of any task so capabilities reflect what is actually installed.
---

# Environment Detection

**Category:** core  ·  **Requires (detect first):** node, git

The honesty layer of UDT: never claim a tool or language is supported unless a real probe proves it is present.

## When to use

- At the start of any non-trivial task, to know what is installable/runnable
- Before a command declares support for a language, runtime or tool
- When the user asks 'what can this project use?' or runs /udt:doctor

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`
- `git`

## Workflow

1. Identify the OS/arch (uname -a on POSIX; $PSVersionTable + [Environment]::OSVersion on Windows).
2. Probe each candidate tool by running its version flag and capturing exit code + output.
3. Detect the project: read package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml, lockfiles and config files.
4. Infer primary language, framework, package manager and build system from what was found — not from guesses.
5. Report a capability table: available (with version) / missing (with install hint).

## Key commands

```bash
node --version && npm --version
git --version
python --version 2>&1 || python3 --version
docker version --format '{{.Server.Version}}' 2>&1
rustc --version; go version; java -version 2>&1
```

## Checklist

- Every 'supported' claim is backed by a successful version probe
- Missing tools are reported with an install hint, not silently ignored
- Project type is inferred from real manifest/lockfiles present on disk

## Common pitfalls

- Assuming a tool exists because the project mentions it — always probe
- Confusing python vs python3, or node installed vs the right version
- Treating a non-zero exit code as 'installed' — check both exit code and output

## Detection matrix (probe, don't assume)

| Layer | Probe | Present when |
| --- | --- | --- |
| Runtime | `node -v`, `python --version`, `ruby -v`, `php -v` | exit 0 + version string |
| Compiler | `gcc --version`, `clang --version`, `rustc --version`, `go version` | exit 0 |
| JVM/.NET | `java -version`, `dotnet --info` | exit 0 |
| Package mgr | `npm`, `pnpm`, `yarn`, `pip`, `cargo`, `maven`, `gradle` | binary resolves |
| Container | `docker version`, `podman version` | daemon reachable |
| VCS | `git --version` | exit 0 |
| DB client | `psql --version`, `mysql --version`, `sqlite3 --version`, `redis-cli --version`, `mongosh --version` | exit 0 |

The `/udt:doctor` command drives this via `scripts/detect-tools.js`, which returns machine-readable JSON.

## Related skills

- `safe-execution`
- `command-registry`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
