/**
 *
 * @param key
 * @param arr
 */
export declare function arrayToObject(key: string, arr?: any[]): any;
/**
 * 引用数组位移，性能优化
 * @param {<any[]>} array
 * @param {number} from
 * @param {number} to
 */
export declare function arrayMoveMutate(array: unknown[], from: number, to: number): void;
/**
 * 数组位移
 * @param {<any[]>} array
 * @param {number} from
 * @param {number} to
 * @returns
 * @example
    ```
        import arrayMove = require('array-move');

        const input = ['a', 'b', 'c'];

        const array1 = arrayMove(input, 1, 2);
        console.log(array1);
        //=> ['a', 'c', 'b']

        const array2 = arrayMove(input, -1, 0);
        console.log(array2);
        //=> ['c', 'a', 'b']

        const array3 = arrayMove(input, -2, -3);
        console.log(array3);
        //=> ['b', 'a', 'c']
    ```
 */
export declare function arrayMove(array: ReadonlyArray<any[]>, from: number, to: number): any[];
