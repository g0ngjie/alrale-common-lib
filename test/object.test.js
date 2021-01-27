import { sortMapByKey } from "../lib/object";

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
})