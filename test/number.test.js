import { randomInt, randomDistinctIntArray, randomDistinctRangeArray } from "../lib/number";

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

    it("randomDistinctIntArray", () => {
        const list = randomDistinctIntArray(10)
        expect(list.includes(6)).toBe(true)
        // 默认[0]
        const defaultList = randomDistinctIntArray()
        expect(defaultList).toEqual([0])
    })

    it("randomDistinctRangeArray", (done) => {
        // 默认[0~10]
        const defaultList = randomDistinctRangeArray()
        expect(defaultList.length).toBe(1)

        const list = randomDistinctRangeArray(10, 5, 6)
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            expect([5, 6, 7, 8, 9, 10].includes(item)).toBe(true)
            if (i === list.length - 1) done()
        }
    })
})
