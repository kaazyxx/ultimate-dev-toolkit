---
name: quantum-computing
description: "Build quantum circuits (Qiskit/Cirq/PennyLane): gates, measurement, simulators, noise. Use for quantum algorithm code. Detect the framework first."
---

# Quantum Computing

**Category:** scientific  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import qiskit; print(qiskit.__version__)"
```

## Common pitfalls

- Ignoring qubit connectivity/transpilation
- Assuming noiseless behavior on real hardware
- Exponential state-vector memory for many qubits

## Related skills

- `python`
- `numerical-methods`
- `algorithms-data-structures`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
