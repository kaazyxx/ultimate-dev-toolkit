#!/usr/bin/env node
/**
 * UDT tool detector (backs /udt:doctor).
 *
 * Probes the real environment: OS/arch, and which developer tools/runtimes are
 * actually installed (by running their version flag), plus a best-effort guess
 * of the current project's stack from its manifest files.
 *
 * Honesty is the point: a tool is reported "installed" only if its probe exits
 * successfully. Nothing is assumed.
 *
 * Usage:
 *   node scripts/detect-tools.js          # human-readable report
 *   node scripts/detect-tools.js --json   # machine-readable JSON
 *
 * Zero dependencies. Node >= 14.
 */
'use strict';
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const TOOLS = [
  { name: 'node', args: ['--version'], group: 'runtime' },
  { name: 'npm', args: ['--version'], group: 'package-manager' },
  { name: 'pnpm', args: ['--version'], group: 'package-manager' },
  { name: 'yarn', args: ['--version'], group: 'package-manager' },
  { name: 'bun', args: ['--version'], group: 'runtime' },
  { name: 'deno', args: ['--version'], group: 'runtime' },
  { name: 'python', args: ['--version'], group: 'runtime' },
  { name: 'python3', args: ['--version'], group: 'runtime' },
  { name: 'pip', args: ['--version'], group: 'package-manager' },
  { name: 'ruby', args: ['--version'], group: 'runtime' },
  { name: 'php', args: ['--version'], group: 'runtime' },
  { name: 'go', args: ['version'], group: 'runtime' },
  { name: 'rustc', args: ['--version'], group: 'compiler' },
  { name: 'cargo', args: ['--version'], group: 'package-manager' },
  { name: 'java', args: ['-version'], group: 'runtime' },
  { name: 'javac', args: ['-version'], group: 'compiler' },
  { name: 'mvn', args: ['--version'], group: 'build' },
  { name: 'gradle', args: ['--version'], group: 'build' },
  { name: 'dotnet', args: ['--version'], group: 'runtime' },
  { name: 'gcc', args: ['--version'], group: 'compiler' },
  { name: 'clang', args: ['--version'], group: 'compiler' },
  { name: 'g++', args: ['--version'], group: 'compiler' },
  { name: 'cmake', args: ['--version'], group: 'build' },
  { name: 'make', args: ['--version'], group: 'build' },
  { name: 'git', args: ['--version'], group: 'vcs' },
  { name: 'docker', args: ['--version'], group: 'container' },
  { name: 'podman', args: ['--version'], group: 'container' },
  { name: 'kubectl', args: ['version', '--client', '--output=yaml'], group: 'container' },
  { name: 'helm', args: ['version', '--short'], group: 'container' },
  { name: 'terraform', args: ['--version'], group: 'iac' },
  { name: 'ansible', args: ['--version'], group: 'iac' },
  { name: 'aws', args: ['--version'], group: 'cloud' },
  { name: 'az', args: ['version'], group: 'cloud' },
  { name: 'gcloud', args: ['--version'], group: 'cloud' },
  { name: 'psql', args: ['--version'], group: 'database' },
  { name: 'mysql', args: ['--version'], group: 'database' },
  { name: 'sqlite3', args: ['--version'], group: 'database' },
  { name: 'redis-cli', args: ['--version'], group: 'database' },
  { name: 'mongosh', args: ['--version'], group: 'database' },
  { name: 'gh', args: ['--version'], group: 'vcs' },
  { name: 'swift', args: ['--version'], group: 'runtime' },
  { name: 'flutter', args: ['--version'], group: 'runtime' },
  { name: 'dart', args: ['--version'], group: 'runtime' },
];

function probe(tool) {
  let res;
  const win = process.platform === 'win32';
  try {
    if (win) {
      // On Windows many tools (npm, yarn, pnpm, tsc, ...) are .cmd/.bat shims that
      // spawnSync cannot resolve without a shell. Pass the whole invocation as one
      // trusted, constant string (no user input) to avoid the args+shell DEP0190.
      res = spawnSync(`${tool.name} ${tool.args.join(' ')}`, {
        encoding: 'utf8', timeout: 5000, windowsHide: true, shell: true,
      });
    } else {
      res = spawnSync(tool.name, tool.args, {
        encoding: 'utf8', timeout: 5000, windowsHide: true, shell: false,
      });
    }
  } catch (e) {
    return { installed: false, reason: e.code || 'error' };
  }
  if (res.error) return { installed: false, reason: res.error.code || 'error' };
  // Some tools (java, dotnet) print the version to stderr, others exit non-zero on --version.
  const out = ((res.stdout || '') + (res.stderr || '')).trim();
  const ok = res.status === 0 || /\d+\.\d+/.test(out);
  if (!ok) return { installed: false, reason: 'exit ' + res.status };
  const firstLine = out.split(/\r?\n/)[0] || '';
  const versionMatch = firstLine.match(/\d+\.\d+(\.\d+)?/);
  return { installed: true, version: versionMatch ? versionMatch[0] : firstLine.slice(0, 40) };
}

const PROJECT_SIGNALS = [
  { file: 'package.json', language: 'JavaScript/TypeScript', pm: 'npm/pnpm/yarn' },
  { file: 'tsconfig.json', language: 'TypeScript' },
  { file: 'pyproject.toml', language: 'Python', pm: 'pip/poetry' },
  { file: 'requirements.txt', language: 'Python', pm: 'pip' },
  { file: 'Cargo.toml', language: 'Rust', pm: 'cargo' },
  { file: 'go.mod', language: 'Go', pm: 'go modules' },
  { file: 'pom.xml', language: 'Java', pm: 'Maven' },
  { file: 'build.gradle', language: 'Java/Kotlin', pm: 'Gradle' },
  { file: 'build.gradle.kts', language: 'Kotlin', pm: 'Gradle' },
  { file: 'Gemfile', language: 'Ruby', pm: 'Bundler' },
  { file: 'composer.json', language: 'PHP', pm: 'Composer' },
  { file: 'pubspec.yaml', language: 'Dart/Flutter', pm: 'pub' },
  { file: 'CMakeLists.txt', language: 'C/C++', pm: 'CMake' },
  { file: 'Dockerfile', framework: 'Docker' },
  { file: 'docker-compose.yml', framework: 'Docker Compose' },
];

function detectProject(dir) {
  const found = [];
  for (const sig of PROJECT_SIGNALS) {
    if (fs.existsSync(path.join(dir, sig.file))) found.push(sig);
  }
  // Framework hints from package.json dependencies.
  const frameworks = [];
  try {
    const pkgPath = path.join(dir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const deps = Object.assign({}, pkg.dependencies, pkg.devDependencies);
      const map = { next: 'Next.js', react: 'React', vue: 'Vue', '@angular/core': 'Angular', svelte: 'Svelte', express: 'Express', '@nestjs/core': 'NestJS', fastify: 'Fastify' };
      for (const k of Object.keys(map)) if (deps && deps[k]) frameworks.push(map[k]);
    }
  } catch { /* ignore */ }
  return { signals: found, frameworks };
}

function main() {
  const asJson = process.argv.includes('--json');
  const dir = process.cwd();
  const results = TOOLS.map((t) => ({ name: t.name, group: t.group, ...probe(t) }));
  const project = detectProject(dir);
  const summary = {
    os: { platform: os.platform(), release: os.release(), arch: os.arch(), cpus: os.cpus().length, memGB: Math.round(os.totalmem() / 1e9) },
    node: process.version,
    installed: results.filter((r) => r.installed).length,
    total: results.length,
    tools: results,
    project,
  };

  if (asJson) {
    process.stdout.write(JSON.stringify(summary, null, 2) + '\n');
    return;
  }

  const line = (s) => process.stdout.write(s + '\n');
  line('');
  line('  Ultimate Dev Toolkit — Doctor');
  line('  ' + '-'.repeat(40));
  line(`  OS:    ${summary.os.platform} ${summary.os.release} (${summary.os.arch})`);
  line(`  CPU:   ${summary.os.cpus} cores   Memory: ${summary.os.memGB} GB`);
  line(`  Node:  ${summary.node}`);
  line('');
  line(`  Tools detected: ${summary.installed}/${summary.total}`);
  line('  ' + '-'.repeat(40));
  const groups = {};
  for (const r of results) (groups[r.group] ||= []).push(r);
  for (const g of Object.keys(groups).sort()) {
    line(`  [${g}]`);
    for (const r of groups[g]) {
      const mark = r.installed ? 'OK ' : ' - ';
      const ver = r.installed ? r.version : 'not found';
      line(`    ${mark} ${r.name.padEnd(12)} ${ver}`);
    }
  }
  line('');
  line('  Project detection (cwd)');
  line('  ' + '-'.repeat(40));
  if (project.signals.length === 0) {
    line('    No recognized project manifest in the current directory.');
  } else {
    const langs = [...new Set(project.signals.filter((s) => s.language).map((s) => s.language))];
    const pms = [...new Set(project.signals.filter((s) => s.pm).map((s) => s.pm))];
    if (langs.length) line('    Language:  ' + langs.join(', '));
    if (pms.length) line('    Packaging: ' + pms.join(', '));
    if (project.frameworks.length) line('    Framework: ' + project.frameworks.join(', '));
    const fw = project.signals.filter((s) => s.framework).map((s) => s.framework);
    if (fw.length) line('    Also:      ' + fw.join(', '));
  }
  line('');
  line('  Missing tools are reported as "not found" — never assumed present.');
  line('');
}

main();
