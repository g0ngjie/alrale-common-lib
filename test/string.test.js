import { randomString } from "../lib/string";

describe("string", () => {

    it("随机字符串", () => {
        const defaultStr = randomString()
        expect(defaultStr.length).toBe(32)
        const str = randomString(16)
        expect(str.length).toBe(16)
    })
})
