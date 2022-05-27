# Token Price CLI

## Description

**Provides real-time prices of several crypto currencies to clients using CLI.**

## :wrench: Installation

```bash
npm install
```

## :computer: Execution

- Development

```bash
npm run start:dev
```

- Production

```bash
npm run build
npm run start
```

## :heavy_check_mark: Unit tests

```bash
npm test
```

## Requirements

- Show Mainnet ETH Price stream

```bash
curl [host]:[port]/mainnet/eth
```

- Show Uniswap ERC20 token price stream

```bash
curl [host]:[port]/uniswap/[token_name]
```

## Todos

- Get prices from chainlink oracle + unit test
