# Contributing to Ultimate Dev Toolkit

Thanks for helping improve UDT. The catalog is data-driven, so most
contributions are small JSON edits plus a rebuild.

## Project layout

- `scripts/catalog/*.json` — the authored catalog (skills, commands, agents).
- `scripts/build-catalog.mjs` — generates `skills/`, `commands/`, `agents/` and
  `docs/{skills,commands,agents}.md` from the catalog. Run it after any edit.
- `scripts/detect-tools.js` — the environment detector behind `/udt:doctor`.
- `hooks/` — advisory safety hooks (see `docs/security.md`).
- `docs/` — hand-written guides; the reference docs are generated.

## Add a skill

1. Add an object to the right `scripts/catalog/skills.*.json` file with at least
   `name`, `category`, `description`. Include real `tools`, `commands` and
   `pitfalls` where they add value.
2. Run `npm run build` (or `node scripts/build-catalog.mjs`).
3. Run `npm test` to validate.

## Add a command or agent

Edit `scripts/catalog/commands.*.json` (`category`, `name`, `description`,
`body`) or `scripts/catalog/agents.json` (`name`, `description`, `tools`,
`body`), then rebuild.

## Ground rules

- **No fake capabilities.** Only claim tool support that a real probe can
  confirm. Prefer fewer, genuinely useful entries over padding.
- **Security stays on.** Never remove confirmation for destructive actions.
- Keep entries concise, specific and consistent with the existing style.

## Before opening a PR

```
npm run build
npm test
```

Both must pass, and the generated files should be committed alongside the
catalog change.