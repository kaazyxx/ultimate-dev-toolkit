---
name: assembly
description: "Read, write and debug x86-64/ARM assembly: registers, calling conventions, memory, syscalls. Use for .s/.asm files and low-level debugging. Detect the assembler/objdump first."
---

# Assembly

**Category:** languages  ·  **Requires (detect first):** gcc, as, objdump, gdb

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gcc`
- `as`
- `objdump`
- `gdb`

## Key commands

```bash
gcc -c file.s -o file.o
objdump -d file.o
gdb ./a.out
```

## Checklist

- Calling convention/ABI respected
- Registers saved/restored correctly
- Stack alignment maintained

## Common pitfalls

- Clobbering caller-saved registers
- Stack misalignment before calls
- Wrong syscall numbers per platform

## Related skills

- `c`
- `cpp`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
