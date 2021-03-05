const { regular } = require('../lib/index')
const {
    InternetURLReg,
    IDNumberReg,
    EmailReg,
    ChineseReg,
    IntegerReg,
    NotNegativeFloatReg,
    NotPositiveFloatReg,
} = regular

describe("正则校验", () => {
    it("url", () => {
        const baidu = 'http://www.baidu.com'
        const baidus = 'https://www.baidu.com'
        const ftp = 'ftp://192.168.2.1/dir'
        const _baidu = InternetURLReg.test(baidu)
        const _baidus = InternetURLReg.test(baidus)
        const _ftp = InternetURLReg.test(ftp)
        expect(_baidu).toBe(true)
        expect(_baidus).toBe(true)
        expect(_ftp).toBe(true)
    })
    it("身份证号", () => {
        const idList = [
            '130928198905281793',
            '130532197901235712',
            '350822197101183592',
            '511826197005258546',
            '36100119860426330X',
            '44092319850718266X',
            '51343620000303911X',
        ]
        for (let i = 0; i < idList.length; i++) {
            const number = idList[i];
            const bool = IDNumberReg.test(number)
            expect(bool).toBe(true)
        }
    })
    it("邮箱", () => {
        const mailList = [
            'xxxxxxxxxxx@qq.com',
            'xxxxx.xxxxxx@163.com',
            'xxxxxxxxxxx@sina.com',
            'xxxxx.xxxxxx@biz.mail.qq.com',
            'xxxxxxxxxxx@gmail.com',
            'xxxxxxxxxxx@baiyahoo.com',
            'xxxxxxx.xxxx@msn.com',
            'xxxxxxxxxxx@hotmail.com',
            'xxxxxxx.xxxx@163.net',
            'xxxxxxxxxxx@live.com',
        ]
        for (let i = 0; i < mailList.length; i++) {
            const mail = mailList[i];
            const bool = EmailReg.test(mail)
            expect(bool).toBe(true)
        }
    })
    it("中文", () => {
        const _one = ChineseReg.test('中文')
        expect(_one).toBe(true)
        const _two = ChineseReg.test('1')
        expect(_two).toBe(false)
        const _three = ChineseReg.test([''])
        expect(_three).toBe(false)
        const _four = ChineseReg.test(123)
        expect(_four).toBe(false)
        const _five = ChineseReg.test({})
        expect(_five).toBe(false)
        const _six = ChineseReg.test(true)
        expect(_six).toBe(false)
    })
    it("整数", () => {
        const _one = IntegerReg.test(12)
        expect(_one).toBe(true)
        const _two = IntegerReg.test(-12)
        expect(_two).toBe(true)
        const _three = IntegerReg.test(12.32)
        expect(_three).toBe(false)
        const _four = IntegerReg.test('12')
        expect(_four).toBe(true)
        const _five = IntegerReg.test(true)
        expect(_five).toBe(false)
        const _six = IntegerReg.test([])
        expect(_six).toBe(false)
        const _seven = IntegerReg.test({})
        expect(_seven).toBe(false)
    })
    it("非负浮点数（正浮点数 + 0）", () => {
        const _one = NotNegativeFloatReg.test(12)
        expect(_one).toBe(true)
        const _two = NotNegativeFloatReg.test(-12)
        expect(_two).toBe(false)
        const _three = NotNegativeFloatReg.test(12.32)
        expect(_three).toBe(true)
        const _four = NotNegativeFloatReg.test('12')
        expect(_four).toBe(true)
        const _five = NotNegativeFloatReg.test(true)
        expect(_five).toBe(false)
        const _six = NotNegativeFloatReg.test([])
        expect(_six).toBe(false)
        const _seven = NotNegativeFloatReg.test({})
        expect(_seven).toBe(false)
    })
    it("非正浮点数（负浮点数 + 0）", () => {
        const _one = NotPositiveFloatReg.test(12)
        expect(_one).toBe(false)
        const _two = NotPositiveFloatReg.test(-12)
        expect(_two).toBe(true)
        const _three = NotPositiveFloatReg.test(12.32)
        expect(_three).toBe(false)
        const _four = NotPositiveFloatReg.test('12')
        expect(_four).toBe(false)
        const _five = NotPositiveFloatReg.test(true)
        expect(_five).toBe(false)
        const _six = NotPositiveFloatReg.test([])
        expect(_six).toBe(false)
        const _seven = NotPositiveFloatReg.test({})
        expect(_seven).toBe(false)
        const _zero = NotPositiveFloatReg.test(0)
        expect(_zero).toBe(true)
        const _eight = NotPositiveFloatReg.test(-123.3)
        expect(_eight).toBe(true)
    })
})