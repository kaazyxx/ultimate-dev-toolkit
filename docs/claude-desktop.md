# Installing UDT in the Claude Desktop app

This walks through installing and using the Ultimate Dev Toolkit inside the
**Claude desktop app** (the Code experience), step by step.

## 0. Prerequisites

- The Claude desktop app with the Code tab.
- **Node.js 18+** on your machine (the `/udt:doctor`, the catalog generator and
  the advisory hooks use it). Check with `node --version`.
- Optional but recommended: git, so you can clone/update the plugin.

## 1. Get the plugin onto your machine

**Option A - you already have this folder** (for example
`C:\Users\admin\Desktop\ultimate-dev-toolkit`): skip to step 2.

**Option B - clone it** (once it is on GitHub):

```bash
git clone https://github.com/your-username/ultimate-dev-toolkit
```

## 2. Add it as a plugin marketplace

In the Claude desktop app, open a Code session and type in the chat/command box:

```
/plugin marketplace add C:\Users\admin\Desktop\ultimate-dev-toolkit
```

(Use the absolute path to the folder. On macOS/Linux it looks like
`/Users/you/ultimate-dev-toolkit`.)

This registers the local folder as a marketplace. If you cloned from GitHub you
can instead use the shorthand:

```
/plugin marketplace add your-username/ultimate-dev-toolkit
```

## 3. Install the plugin

```
/plugin install ultimate-dev-toolkit
```

The desktop app shows an install/permission dialog listing what the plugin adds
(skills, commands, agents, hooks and MCP connectors). Approve it.

> Tip: the app also has a **Plugins** panel (the same view that shows counts like
> "Skills 351 - Commands 112 - Agents 72 - Hooks 27"). You can toggle the plugin
> on/off there.

## 4. Verify your environment

```
/udt:doctor
```

You will see a table of which tools are actually installed and which skills
apply. Missing tools are reported as "not found" - the toolkit never pretends a
tool is present.

## 5. Use it

Type `/` to browse commands, or run any of:

```
/udt:help
/dev:analyze ./src
/git:review
/security:audit
/db:inspect
/k8s:pods
```

Skills load automatically when your task matches one (for example, editing a
Rust file pulls in the `rust` skill). Agents are delegated to by commands like
`/dev:review`, or you can ask for one by name.

## 6. Connectors (MCP servers)

The plugin declares three zero-config MCP servers - `sequential-thinking`,
`memory` and `filesystem` - launched via `npx`. They start on first use. If you
do not want them, open `.claude-plugin/plugin.json` and remove the ones you
skip, then reinstall.

## 7. Updating

Pull the latest folder (or `git pull`), then in the app:

```
/plugin marketplace update ultimate-dev-toolkit
```

If you edited the catalog yourself, rebuild first:

```bash
npm run build
npm test
```

## Troubleshooting

- **A command does not show up** - rebuild (`npm run build`) and reinstall the
  plugin; command ids are `/<category>:<name>`.
- **Hooks feel noisy/slow** - they are advisory and stay silent unless a risky
  pattern is detected; trim `hooks/hooks.json` if needed (see
  `configuration.md`).
- **`/udt:doctor` says a tool is missing but you have it** - it is not on the
  PATH the app inherits; fix your PATH and retry.

See also: `installation.md`, `configuration.md`, `security.md`.