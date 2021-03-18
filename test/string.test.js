const {
    randomString,
    nameDesensitization,
    desensitization,
    positionOfStringIndexes,
    uuid,
    uuid2,
    guid,
    guid2,
    stringExtension
} = require('../lib');

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

    it("目标字符出现次数", () => {
        const str = 'asdfasdfasdfasdfasdfasdf'
        const target = 'asdf'
        const list = positionOfStringIndexes(str, target)
        expect(list).toEqual([0, 4, 8, 12, 16, 20])
        const target2 = '123'
        const list2 = positionOfStringIndexes(str, target2)
        expect(list2).toEqual([])
    })

    it("uuid guid", () => {
        const _uuid = uuid()
        const _guid = guid()
        const _uuid2 = uuid2(16, 16)
        const _guid2 = guid2()
        const temp = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        expect(_uuid2).toHaveLength(16)
        expect(_uuid).toHaveLength(temp.length)
        expect(_guid).toHaveLength(temp.length)
        expect(_guid2).toHaveLength(36)
    })

    it("字符串后缀获取、判断", () => {
        const str1 = stringExtension('flower.png', '.');
        expect(str1).toBe('png')
        const bool = stringExtension('avatar.jpg', '.', ['png', 'jpg']);
        expect(bool).toBe(true)
        const str2 = stringExtension('xxx@gmail.com', '@');
        expect(str2).toBe('gmail.com')
        const null1 = stringExtension('null.png');
        expect(null1).toBe(false);
    })
})
