import {
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray,
    isNumber,
    isFloat,
    prefixZero,
    isInt,
} from "../lib/number";

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

    it("isNumber", () => {
        const one = isNumber('one')
        expect(one).toBe(false)
        const two = isNumber('2')
        expect(two).toBe(true)
        const func = isNumber(() => { })
        expect(func).toBe(false)

        const _one = isNumber('')
        const _two = isNumber('123')
        const _three = isNumber(1.23)
        const _four = isNumber(123)
        const _five = isNumber(true)
        const _six = isNumber(['123', '456'])
        const _seven = isNumber({})
        const _eight = isNumber(-29)
        const _nine = isNumber(-12.4)
        const _ten = isNumber('032')

        expect(_one).toBe(false)
        expect(_two).toBe(true)
        expect(_three).toBe(true)
        expect(_four).toBe(true)
        expect(_five).toBe(false)
        expect(_six).toBe(false)
        expect(_seven).toBe(false)
        expect(_eight).toBe(true)
        expect(_nine).toBe(true)
        expect(_ten).toBe(true)
    })

    it("isFloat", () => {
        const isA = isFloat('1')
        const isB = isFloat('1.2')
        const isC = isFloat('true')
        const isD = isFloat([1.1, 2.2])
        const isE = isFloat(2.334)
        const isF = isFloat({ '1.1': 1.1 })
        expect(isA).toBe(false)
        expect(isB).toBe(true)
        expect(isC).toBe(false)
        expect(isD).toBe(false)
        expect(isE).toBe(true)
        expect(isF).toBe(false)
    })

    it("前置补零", () => {
        const _one = prefixZero(2)
        const _two = prefixZero(20)
        const _three = prefixZero(20, 3)
        const _four = prefixZero()
        const _five = prefixZero(2.21)
        const _six = prefixZero(true)
        const _seven = prefixZero(20, 6)
        const _eight = prefixZero(-20)
        expect(_one).toBe('02')
        expect(_two).toBe('20')
        expect(_three).toBe('020')
        expect(_four).toBe('')
        expect(_five).toBe('')
        expect(_six).toBe('')
        expect(_seven).toBe('000020')
        expect(_eight).toBe('')
    })

    it("isInt", () => {
        const _one = isInt(122)
        expect(_one).toBe(true)

        const _two = isInt(-122)
        expect(_two).toBe(true)

        const _three = isInt(true)
        expect(_three).toBe(false)

        const _four = isInt('032')
        expect(_four).toBe(true)

        const _five = isInt([])
        expect(_five).toBe(false)

        const _six = isInt({})
        expect(_six).toBe(false)

        const _seven = isInt(() => { })
        expect(_seven).toBe(false)

        const _eight = isInt(1.23)
        expect(_eight).toBe(false)

        const _nine = isInt(-1.23)
        expect(_nine).toBe(false)

        const _ten = isInt('2123')
        expect(_ten).toBe(true)
    })
})
