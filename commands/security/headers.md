---
description: "Check a URL's HTTP security headers and suggest hardening."
argument-hint: "<url>"
allowed-tools: Bash
---

Check security headers for the URL in $ARGUMENTS using the `security-headers` skill. Fetch headers (curl -sI) and report on CSP, HSTS, X-Content-Type-Options, frame options and referrer policy. Suggest concrete hardening for anything missing/weak.
