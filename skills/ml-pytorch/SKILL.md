---
name: ml-pytorch
description: "Build and train neural networks with PyTorch: tensors, autograd, modules, training loops, GPU. Use for PyTorch models. Detect torch first."
---

# Ml Pytorch

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Key commands

```bash
python -c "import torch; print(torch.__version__, torch.cuda.is_available())"
```

## Checklist

- Tensors/devices consistent (all on GPU or CPU)
- optimizer.zero_grad each step
- model.eval() + no_grad for inference

## Common pitfalls

- Forgetting zero_grad (accumulating gradients)
- Device mismatch (cpu vs cuda) errors
- Data leakage between train/val

## Related skills

- `ml-tensorflow`
- `ml-training-pipeline`
- `python`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
