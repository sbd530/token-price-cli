import { isBigNumber } from 'web3-utils'
import { latestRoundData } from "./oracle"
import { Token } from './token.enum'
import BN from 'bn.js'

describe("Getting prices", () => {
    it("should return ETH / USD price", async () => {
        const data = await latestRoundData(Token.ETH)
        //* ROUND(USD * 10 ** 5)
        const price = data.answer
        //* isString
        expect(typeof price).toBe('string')
        //* length > 0
        expect(price).toBeTruthy()
        //* can cast to number
        expect(Number(price)).not.toBeNaN()
    })
})
