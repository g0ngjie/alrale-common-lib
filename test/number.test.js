import { randomInt } from "../lib/number";


describe("number", () => {

    it("随机整数", () => {
        const num = randomInt()
        expect(num <= 10).toBe(true)
        expect(num >= 0).toBe(true)
    })

    it("随机区间整数", () => {
        const num = randomInt(10, 5)
        expect(num <= 10).toBe(true)
        expect(num >= 5).toBe(true)
    })
})