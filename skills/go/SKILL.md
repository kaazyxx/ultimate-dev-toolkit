---
name: go
description: "Write, vet, test and build idiomatic Go: goroutines, channels, explicit error handling, interfaces. Use for .go files and go.mod projects."
---

# Go

**Category:** languages  ·  **Requires (detect first):** go, gofmt, staticcheck

Simple, idiomatic Go with vet clean and errors handled.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `go`
- `gofmt`
- `staticcheck`

## Key commands

```bash
go build ./...
go vet ./...
gofmt -l .
go test ./... -race
```

## Checklist

- Errors checked, not discarded
- No goroutine leaks; contexts cancelled
- gofmt/vet clean; -race in tests

## Common pitfalls

- Ignoring returned errors
- Goroutine leaks from unbuffered channels
- Loop variable capture in goroutines

## Related skills

- `rust`
- `backend-node`
- `docker-fundamentals`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
