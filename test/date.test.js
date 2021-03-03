const { formatTs } = require('../lib/date')

describe("日期工具", () => {
    it('日期格式化', () => {
        // 2021年1月2日3时4分5秒 = 1609527845
        const { year } = formatTs(1609527845)
        expect(year).toBe(2021)
        // 2009年10月12日13时44分55秒 = 1255326295
        const { hour, fullHour, minutes} = formatTs(1255326295000)
        expect(hour).toBe(13)
        expect(fullHour).toBe('13')
        expect(minutes).toBe(44)
    })
})