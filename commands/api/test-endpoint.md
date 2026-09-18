---
description: Exercise an API endpoint and validate its response.
argument-hint: "<method> <url> [body]"
allowed-tools: Bash, Read
---

Test the endpoint described in $ARGUMENTS using the `api-testing-tools` skill. Send the request (curl/httpie), then validate status, headers and body shape. Include a negative/error case. Do not put secrets in the URL; use headers and redact them in output.
