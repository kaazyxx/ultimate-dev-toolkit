---
name: rust
description: "Write, lint, format, test and build Rust: ownership, borrowing, error handling, traits. Use for .rs files, Cargo.toml projects, and borrow-checker errors."
---

# Rust

**Category:** languages  ·  **Requires (detect first):** rustc, cargo, clippy, rustfmt

Safe, idiomatic Rust with clippy clean and no needless unwrap.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `rustc`
- `cargo`
- `clippy`
- `rustfmt`

## Key commands

```bash
cargo build
cargo clippy -- -D warnings
cargo fmt --check
cargo test
```

## Checklist

- No unwrap/expect on fallible paths in library code
- clippy clean with warnings denied
- unsafe blocks justified and minimal

## Common pitfalls

- Fighting the borrow checker by cloning everything
- unwrap() panics in production paths
- Blocking calls inside async

## Related skills

- `cpp`
- `go`
- `webassembly`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
