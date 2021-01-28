import { randomString, nameDesensitization, desensitization } from "../lib/string";

describe("string", () => {

    it("随机字符串", () => {
        const defaultStr = randomString()
        expect(defaultStr.length).toBe(32)
        const str = randomString(16)
        expect(str.length).toBe(16)
    })

    it("用户名脱敏", () => {
        const name = nameDesensitization("张三丰")
        expect(name).toBe("张*丰")
    })
    it("字符串脱敏", () => {
        const str = desensitization('asdfg', 1, 3)
        expect(str).toBe('a**fg')
    })
})
