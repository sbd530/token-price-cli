import { getPrice } from "./oracle"
import { Token } from './token.enum'


describe("Getting prices", () => {
    it("should return ETH price", async () => {
        const price = await getPrice(Token.ETH)
        expect(price).toBeInstanceOf(Number)
    })
})
