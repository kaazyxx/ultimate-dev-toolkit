---
name: desktop-electron
description: "Build cross-platform desktop apps with Electron: main/renderer, IPC, security (contextIsolation), packaging. Use for Electron projects."
---

# Desktop Electron

**Category:** platforms  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm start
npx electron-builder
```

## Checklist

- contextIsolation on; nodeIntegration off
- IPC validated; no arbitrary main access
- Auto-update signed

## Common pitfalls

- Exposing Node to untrusted renderer content (RCE)
- Loading remote content with full privileges
- Huge bundle sizes

## Related skills

- `desktop-tauri`
- `web-frontend-react`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
