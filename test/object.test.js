import { sortMapByKey, objectToVArray, mapToVArray } from "../lib/object";

describe("object", () => {
    it('sortMapByKey', () => {
        const object = { 12: { a: 1 }, 4: 4, '7': true, 1: 'haha' }
        const resObj = sortMapByKey(object, false)
        expect(resObj[12]).toEqual({ a: 1 })

        const map = new Map();
        map.set(12, { a: 1 }).set(4, 4).set(7, true).set(1, 'haha')
        const resMap = sortMapByKey(map)
        expect(resMap.get(1)).toBe('haha')
    })

    it("objectToVArray", () => {
        const obj = { a: 1, b: null, c: [1, 2], d: { val: 'haha' } }
        const arr = objectToVArray(obj)
        expect(arr.includes(1)).toBe(true)
    })

    it("mapToVArray", () => {
        const obj = { a: 1, b: null, c: [1, 2], d: { val: 'haha' } }
        const map = new Map();
        map.set('a', 1).set('b', null).set('c', [1, 2]).set('d', true)
        const arr = mapToVArray(map)
        expect(arr.includes(true)).toBe(true)
    })
})