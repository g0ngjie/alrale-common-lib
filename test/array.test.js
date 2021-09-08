const { arrayToObject, arrayMove, arrayMoveMutate, arrayRange } = require('../lib');

describe("array", () => {
    it('arrayToObject', () => {
        const arr = [{ id: 1, test: 123 }, { id: 2, test: 345 }]
        const obj = arrayToObject('id', arr)
        expect(obj['2']).toEqual({ id: 2, test: 345 })
    })

    it('arrayMove', () => {
        const input = ['a', 'b', 'c'];
        const array1 = arrayMove(input, 1, 2);
        expect(array1).toEqual(['a', 'c', 'b']);

        const array2 = arrayMove(input, -1, 0);
        expect(array2).toEqual(['c', 'a', 'b']);

        const array3 = arrayMove(input, -2, -3);
        expect(array3).toEqual(['b', 'a', 'c']);
    })

    it('arrayMoveMutate', () => {
        const input1 = ['a', 'b', 'c'];
        arrayMoveMutate(input1, 1, 2);
        expect(input1).toEqual(['a', 'c', 'b']);

        const input2 = ['a', 'b', 'c'];
        arrayMoveMutate(input2, -1, 0);
        expect(input2).toEqual(['c', 'a', 'b']);

        const input3 = ['a', 'b', 'c'];
        arrayMoveMutate(input3, -2, -3);
        expect(input3).toEqual(['b', 'a', 'c']);
    })

    it('arrayRange', () => {
        const arr1 = arrayRange(0, 5, 2)
        expect(arr1).toEqual([0, 2, 4]);

        const arr2 = arrayRange(1, 5, 2)
        expect(arr2).toEqual([1, 3, 5]);
    })

})