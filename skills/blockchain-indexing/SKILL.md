---
name: blockchain-indexing
description: "Index on-chain data (The Graph/subgraphs/custom indexers): events, reorg handling, queries. Use for reading chain data at scale."
---

# Blockchain Indexing

**Category:** web3

## Checklist

- Reorg-safe indexing (handle rollbacks)
- Idempotent event processing
- Backfill + live tail strategy

## Common pitfalls

- Not handling chain reorgs
- Missing events from RPC gaps
- Unbounded query cost

## Related skills

- `data-etl-pipelines`
- `web3-ethers`
- `db-postgres`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
