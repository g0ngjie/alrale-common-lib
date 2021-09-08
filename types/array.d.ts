/**
 * 数组转对象
 * @param {string} key
 * @param {any[]} arr
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
        const { arrayMove } = require('@alrale/common-lib');

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
/**
 * 序列生成器
 * @param {number} start 开始索引点
 * @param {number} stop 结束索引点
 * @param {number} step 间隔
 * @example ```
 * arrayRange(0, 5, 2) // [ 0, 2, 4 ]
 * arrayRange(1, 5, 2) // [ 1, 3, 5 ]
 * ```
 */
export declare function arrayRange(start: number, stop: number, step?: number): number[];
