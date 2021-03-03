/**
 * 随机区间整数
 * @param max
 * @param min
 */
export declare function randomInt(max?: number, min?: number): number;
/**
 * 随机区间唯一整数的列表
 * 随机获取固定长度len的数组
 * 最小出现值fromMin
 * 最大出现值toMax
 * @description 注: 当固定长度超出 max - min时，以0补位
 * @param toMax
 * @param fromMin
 * @param len 长度
 */
export declare function randomDistinctRangeArray(toMax?: number, fromMin?: number, len?: number): number[];
/**
 * 随机获取整数列表
 * @param len 长度
 */
export declare function randomDistinctIntArray(len?: number): number[];
/**
 * 判断数字类型,(包含字符串类型数字)
 * @param {any} target
 */
export declare function isNumber(target: any): boolean;
/**
 * 严格校验正负正数
 * @param {any} target
 */
export declare function isInt(target: any): boolean;
/**
 * 判断是否位float格式
 * @param target
 */
export declare function isFloat(target: any): boolean;
/**
 * 整数前置补零
 * @param {number|string} target
 * @param {number} places 位数，默认2 -> 10
 */
export declare function prefixZero(target: number | string, places?: number): string;
declare const _default: {
    randomInt: typeof randomInt;
    randomDistinctIntArray: typeof randomDistinctIntArray;
    randomDistinctRangeArray: typeof randomDistinctRangeArray;
};
export default _default;
