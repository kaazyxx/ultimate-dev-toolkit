---
name: bioinformatics
description: "Process biological sequence data: FASTA/FASTQ, alignment (BWA/minimap2), variant calling, SAM/BAM/VCF. Use for genomics pipelines. Detect samtools/bwa first."
---

# Bioinformatics

**Category:** scientific  ·  **Requires (detect first):** samtools, bwa, bcftools

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `samtools`
- `bwa`
- `bcftools`

## Key commands

```bash
bwa mem ref.fa reads.fq | samtools sort -o out.bam
samtools index out.bam
bcftools call -mv
```

## Common pitfalls

- Reference/read genome build mismatch
- Unindexed BAM/reference slowing everything
- Ignoring read QC before alignment

## Related skills

- `data-etl-pipelines`
- `python`
- `numerical-methods`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
