#!/usr/bin/env bash
# Initialize git and create the first commit for Ultimate Dev Toolkit.
# Requires git: https://git-scm.com
set -euo pipefail
cd "$(dirname "$0")/.."
if ! command -v git >/dev/null 2>&1; then
  echo "git is not installed. Install it and re-run." >&2
  exit 1
fi
git init
git add -A
git commit -m "feat: Ultimate Dev Toolkit v1.0.0" -m "Security-first universal developer toolkit plugin for Claude Code: 351 skills, 112 commands, 72 agents, 27 hooks, 3 connectors." -m "Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git branch -M main
echo
echo "First commit created. To publish to GitHub:"
echo "  git remote add origin https://github.com/your-username/ultimate-dev-toolkit.git"
echo "  git push -u origin main"
echo "Or: gh repo create ultimate-dev-toolkit --public --source=. --push"