## Token Price CLI

### :wrench: Installation

```shell
npm install
```

### :computer: Execution

- Development

```shell
npm run start:dev
```

- Production

```shell
npm run build
npm run start
```

### :heavy_check_mark: Unit tests

```shell
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

### Todo

- Get prices from chainlink oracle + unit test