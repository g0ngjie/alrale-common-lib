const { formatTs } = require('../lib/date')

describe("日期工具", () => {
    it('日期格式化', () => {
        // 2021年1月2日3时4分5秒 = 1609527845
        const { year, month, day, hour, minutes, seconds } = formatTs(1609527845)
        expect(year).toBe(2021)
        expect(month).toBe(1)
        expect(day).toBe(2)
        expect(hour).toBe(3)
        expect(minutes).toBe(4)
        expect(seconds).toBe(5)
        // 2009年10月12日13时44分55秒 = 1255326295
        const { fullMonth, fullDay, fullHour, fullMinutes, fullSeconds} = formatTs(1255326295000)
        expect(fullMonth).toBe('10')
        expect(fullDay).toBe('12')
        expect(fullHour).toBe('13')
        expect(fullMinutes).toBe('44')
        expect(fullSeconds).toBe('55')
    })
})