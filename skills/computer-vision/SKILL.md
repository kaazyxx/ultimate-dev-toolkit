---
name: computer-vision
description: "Build computer vision models: augmentation, transfer learning, detection/segmentation, evaluation. Use for image tasks."
---

# Computer Vision

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Augmentation matches real variation
- Transfer learning from pretrained backbones
- Correct IoU/mAP metrics

## Common pitfalls

- Data leakage from near-duplicate images
- Wrong normalization for a pretrained model
- Overfitting on small datasets

## Related skills

- `ml-pytorch`
- `ml-evaluation`
- `data-feature-engineering`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
