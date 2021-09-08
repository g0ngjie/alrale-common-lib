
/**
 * 数组转对象
 * @param {string} key
 * @param {any[]} arr
 */
export function arrayToObject(key: string, arr: any[] = []) {
    const mapping: any = {};
    arr.forEach((item: any) => {
        if (item[key]) {
            mapping[item[key]] = item
        }
    })
    return mapping
}

/**
 * 引用数组位移，性能优化
 * @param {<any[]>} array
 * @param {number} from
 * @param {number} to
 */
export function arrayMoveMutate(array: unknown[], from: number, to: number): void {
    const startIndex = from < 0 ? array.length + from : from;

    if (startIndex >= 0 && startIndex < array.length) {
        const endIndex = to < 0 ? array.length + to : to;

        const [item] = array.splice(from, 1);
        array.splice(endIndex, 0, item);
    }
}

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
export function arrayMove(array: ReadonlyArray<any[]>, from: number, to: number): any[] {
    const _array: any[] = [...array];
    arrayMoveMutate(_array, from, to);
    return _array;
}

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
export function arrayRange(start: number, stop: number, step: number = 1): number[] {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + (i * step)
    )
}
