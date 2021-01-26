import { arrayToObject } from "../lib/array";

describe("array", () => {
    it('arrayToObject', () => {
        const arr = [{ id: 1, test: 123 }, { id: 2, test: 345 }]
        const obj = arrayToObject('id', arr)
        expect(obj['2']).toEqual({ id: 2, test: 345 })
    })
})