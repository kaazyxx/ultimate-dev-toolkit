---
name: desktop-tauri
description: "Build lightweight desktop apps with Tauri (Rust + web frontend): commands, permissions, bundling. Use for Tauri projects. Detect tauri/cargo first."
---

# Desktop Tauri

**Category:** platforms  ·  **Requires (detect first):** cargo, npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cargo`
- `npm`

## Key commands

```bash
npx tauri dev
npx tauri build
```

## Checklist

- Allowlist scoped to needed APIs
- Rust commands validate inputs
- Bundle signed

## Common pitfalls

- Overly broad allowlist
- Trusting frontend-supplied paths in Rust commands

## Related skills

- `rust`
- `desktop-electron`
- `web-frontend-react`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
