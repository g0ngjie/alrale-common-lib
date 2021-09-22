const { each, has, keys, values } = require('../lib');

describe("each", () => {
    it('object', () => {
        const map = { a: 1, b: 2, c: { c1: 11 }, d: [1, 2, 3] }
        const keys = []
        each(map, function (k, v) {
            if (k === 'a') expect(v).toBe(1)
            keys.push(k)
        })
        expect(keys).toEqual(['a', 'b', 'c', 'd'])

        const doneMap = { a: 1, b: 2, c: 3 }
        const doneKeys = []
        each(doneMap, (k, v, done) => {
            if (k === 'b') done()
            doneKeys.push(v)
        })
        expect(doneKeys).toEqual([1])
    })

    it('array', () => {
        const arr = [{ id: 1, test: 123 }, { id: 2, test: 345 }, '123DD']
        const keys = []
        each(arr, function (k, v) {
            if (k === 0) expect(v).toEqual({ id: 1, test: 123 })
            keys.push(k)
        })
        expect(keys).toEqual([0, 1, 2])

        const doneArr = [1, 2, 3, 4]
        const doneKeys = []
        each(doneArr, function (k, v, done) {
            if (v === 3) done()
            doneKeys.push(v)
        })
        expect(doneKeys).toEqual([1, 2])
    })

    it("keys", () => {
        const mapkeys = keys({ a: 1, b: 2, d: 'abd' })
        expect(mapkeys).toEqual(['a', 'b', 'd'])
        const arrkeys = keys([1, 2, 3, 4, 5])
        expect(arrkeys).toEqual(['0', '1', '2', '3', '4'])
    })

    it("has", () => {
        expect(has([1, 2], 0)).toBe(true)
        expect(has({ d: [1, 2] }, 'd')).toBe(true)
        expect(has({ d: [1, 2] }, 'c')).toBe(false)
    })

    it("values", () => {
        const mapValues = values({ a: 1, b: 2, d: 'abd' })
        expect(mapValues).toEqual([1, 2, 'abd'])
        const arrValues = values([1, 2, 3, 4, 5])
        expect(arrValues).toEqual([1, 2, 3, 4, 5])
    })

})