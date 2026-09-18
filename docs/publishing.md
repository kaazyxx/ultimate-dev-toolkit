# Publishing to GitHub

The repo is publish-ready (LICENSE, README, .gitignore, .gitattributes, CI-free
but testable). These are the exact steps.

> This machine currently has **no git installed**, so the commit/push must be run
> after installing git from https://git-scm.com/download/win (or `winget install
> Git.Git`). The helper scripts below check for git and stop cleanly if missing.

## 1. First commit (helper script)

Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\init-git.ps1
```

macOS/Linux:

```bash
bash scripts/init-git.sh
```

Or manually:

```bash
git init
git add -A
git commit -m "feat: Ultimate Dev Toolkit v1.0.0"
git branch -M main
```

## 2. Create the GitHub repo and push

With the GitHub CLI (recommended):

```bash
gh repo create ultimate-dev-toolkit --public --source=. --push
```

Or manually (replace `your-username`):

```bash
git remote add origin https://github.com/your-username/ultimate-dev-toolkit.git
git push -u origin main
```

## 3. Update placeholders

Search-and-replace `your-username` (and the author name) in:

- `.claude-plugin/plugin.json` (`author`, `homepage`, `repository`)
- `.claude-plugin/marketplace.json` (`owner`)
- `README.md` install snippets
- `LICENSE` copyright line

## 4. Let others install it

Once pushed, anyone can install from Claude Code:

```
/plugin marketplace add your-username/ultimate-dev-toolkit
/plugin install ultimate-dev-toolkit
```

## 5. Before every release

```
npm run build   # regenerate the catalog + docs
npm test        # validate structure and counts
```

Commit the regenerated `skills/`, `commands/`, `agents/`, `docs/*.md` and
`catalog.summary.json` alongside the catalog change.