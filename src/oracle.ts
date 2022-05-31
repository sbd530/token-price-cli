import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import abi from './abi'
import 'dotenv/config'
import { Token } from './token.enum'

const url = process.env.ETH_USD_PROVIDER || ''
const address = process.env.ETH_USD_ADDRESS || ''

const web3 = new Web3(url)
const priceFeed = new web3.eth.Contract(abi as AbiItem[], address)

interface RoundData {
    roundId: number,
    answer: number,
    startedAt: number,
    updatedAt: number,
    answeredInRound: number
}

let priceCache = 0

export async function latestRoundData(token?: string): Promise<RoundData> {
    return await priceFeed.methods.latestRoundData().call()
}
