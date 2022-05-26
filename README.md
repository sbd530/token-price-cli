## Token Price CLI

### Installation

```shell
npm install
```

### Execution

- Development

```shell
npm run start:dev
```

- Production

```shell
npm run build
npm run start
```

### Requirements

- Show Mainnet ETH Price stream

```shell
curl [host]:[port]/mainnet/eth 
```

- Show Uniswap ERC20 token price stream

```shell
curl [host]:[port]/uniswap/[token_name]
```

### TODO

- Jest setting
- Get prices from chainlink oracle + unit test