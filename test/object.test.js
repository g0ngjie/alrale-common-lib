import { sortMapByKey, mapToVArray, objectToArray } from "../lib/object";

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

    it("mapToVArray", () => {
        const map = new Map();
        map.set('a', 1).set('b', null).set('c', [1, 2]).set('d', true)
        const arr = mapToVArray(map)
        expect(arr.includes(true)).toBe(true)
    })

    it("objectToArray", () => {
        const obj = { a: 1, b: null, c: [1, 2], d: { val: 'haha' } }
        const objArr = objectToArray(obj)
        expect(objArr[0].a).toBe(1)

        const map = new Map();
        map.set('a', 1).set('b', null).set('c', [1, 2]).set('d', true)
        const mapArr = objectToArray(map)
        expect(mapArr.length).toBe(map.size)
    })
})