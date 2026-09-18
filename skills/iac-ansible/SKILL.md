---
name: iac-ansible
description: "Automate configuration with Ansible: playbooks, roles, inventories, idempotency. Use for playbook.yml/roles. Detect ansible first."
---

# Iac Ansible

**Category:** devops  ·  **Requires (detect first):** ansible, ansible-lint

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ansible`
- `ansible-lint`

## Key commands

```bash
ansible-lint
ansible-playbook --check site.yml
```

## Checklist

- Tasks idempotent (check mode passes)
- Secrets via ansible-vault
- Roles reusable and parameterized

## Common pitfalls

- Non-idempotent shell tasks
- Plaintext secrets in vars
- Using command where a module exists

## Related skills

- `iac-terraform`
- `linux-administration`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
