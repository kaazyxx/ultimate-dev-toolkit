---
name: webassembly
description: Build, inspect and debug WebAssembly modules and their JS/host bindings from Rust/C/AssemblyScript toolchains. Use for .wasm/.wat and wasm-pack projects.
---

# Webassembly

**Category:** languages  ·  **Requires (detect first):** wasm-pack, wat2wasm, wasm2wat, emcc

Compile to wasm and wire it to the host safely.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `wasm-pack`
- `wat2wasm`
- `wasm2wat`
- `emcc`

## Key commands

```bash
wasm-pack build --target web
wat2wasm module.wat -o module.wasm
wasm2wat module.wasm
```

## Checklist

- Memory boundaries between host and module respected
- Exports/imports match the host contract
- Bundle size and load path validated

## Common pitfalls

- Passing pointers without agreeing on memory layout
- Assuming threads/SIMD without feature detection

## Related skills

- `rust`
- `cpp`
- `javascript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
