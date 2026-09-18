---
name: markdown-tooling
description: "Author and lint Markdown/MDX: linting, formatting, frontmatter, embeds, docs pipelines. Use for docs content."
---

# Markdown Tooling

**Category:** media  ·  **Requires (detect first):** npx markdownlint, npx prettier

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx markdownlint`
- `npx prettier`

## Key commands

```bash
npx markdownlint '**/*.md'
npx prettier --check '**/*.md'
```

## Common pitfalls

- Broken links/anchors
- Inconsistent heading levels
- Raw HTML that breaks renderers

## Related skills

- `documentation-writer`
- `static-site-generators`
- `tech-writing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
