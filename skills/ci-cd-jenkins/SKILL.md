---
name: ci-cd-jenkins
description: Build pipelines with Jenkins declarative/scripted pipelines. Use for Jenkinsfile.
---

# Ci Cd Jenkins

**Category:** devops

## Checklist

- Declarative pipeline where possible
- Credentials from the store, not literals
- Agents/labels pinned

## Common pitfalls

- Secrets echoed in build logs
- Unbounded stateful agents
- Groovy sandbox bypasses

## Related skills

- `groovy`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
