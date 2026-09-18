#requires -Version 5.1
# Initialize git and create the first commit for Ultimate Dev Toolkit.
# Requires git on PATH: https://git-scm.com/download/win
$ErrorActionPreference = "Stop"
Set-Location -Path (Join-Path $PSScriptRoot "..")
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "git is not installed / not on PATH. Install it from https://git-scm.com and re-run."
  exit 1
}
git init
git add -A
git commit -m "feat: Ultimate Dev Toolkit v1.0.0" -m "Security-first universal developer toolkit plugin for Claude Code: 351 skills, 112 commands, 72 agents, 27 hooks, 3 connectors." -m "Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git branch -M main
Write-Host ""
Write-Host "First commit created. To publish to GitHub:"
Write-Host "  git remote add origin https://github.com/your-username/ultimate-dev-toolkit.git"
Write-Host "  git push -u origin main"
Write-Host "Or use the GitHub CLI: gh repo create ultimate-dev-toolkit --public --source=. --push"