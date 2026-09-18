---
name: verilog-vhdl
description: "Write and simulate hardware description in Verilog/SystemVerilog/VHDL: modules, clocking, testbenches. Use for .v/.sv/.vhd files. Detect iverilog/ghdl first."
---

# Verilog Vhdl

**Category:** languages  ·  **Requires (detect first):** iverilog, ghdl, verilator

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `iverilog`
- `ghdl`
- `verilator`

## Key commands

```bash
iverilog -o sim design.v tb.v && vvp sim
verilator --lint-only design.sv
```

## Checklist

- Synchronous vs combinational logic clear
- No inferred latches
- Reset and clock domains correct

## Common pitfalls

- Unintended latches from incomplete assignments
- Clock-domain-crossing without synchronizers
- Blocking vs non-blocking assignment misuse

## Related skills

- `c`
- `performance-profiling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
