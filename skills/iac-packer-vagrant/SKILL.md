---
name: iac-packer-vagrant
description: Build machine images with Packer and dev VMs with Vagrant. Use for .pkr.hcl and Vagrantfile. Detect the tools first.
---

# Iac Packer Vagrant

**Category:** devops  ·  **Requires (detect first):** packer, vagrant

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `packer`
- `vagrant`

## Key commands

```bash
packer validate .
packer build .
vagrant up
```

## Checklist

- Images versioned and reproducible
- Provisioners idempotent
- Secrets not baked into images

## Common pitfalls

- Baking secrets into images
- Snowflake images built manually

## Related skills

- `docker-fundamentals`
- `iac-ansible`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
