import { IntegerReg, NotNegativeFloatReg, NotPositiveFloatReg } from "./regular";

/**
 * 随机区间整数
 * @param max 
 * @param min 
 */
export function randomInt(max: number = 10, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


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
export function randomDistinctRangeArray(toMax: number = 10, fromMin: number = 0, len: number = 1): number[] {
    const temp: number[] = new Array();
    // 获取fromMin -> toMax 的有序整数列表
    const target: number[] = Array.from(Array(toMax - fromMin + 1), (_, v) => v).map(num => num + fromMin)
    for (let i = 0; i < len; i++) {
        const randomIndex: number = Math.floor(Math.random() * target.length);
        if (target[randomIndex]) {
            temp.push(target[randomIndex])
            target.splice(randomIndex, 1)
        } else temp.push(0)
    }
    return temp
}

/**
 * 随机获取整数列表
 * @param len 长度
 */
export function randomDistinctIntArray(len: number = 1): number[] {
    const temp: number[] = new Array();
    const target: number[] = Array.from(Array(len), (_, v) => v)
    for (let i = 0; i < len; i++) {
        const randomIndex: number = Math.floor(Math.random() * target.length);
        temp.push(target[randomIndex])
        target.splice(randomIndex, 1)
    }
    return temp
}

/**
 * 判断数字类型,(包含字符串类型数字)
 * @param {any} target 
 */
export function isNumber(target: any): boolean {
    return NotNegativeFloatReg.test(target) || NotPositiveFloatReg.test(target)
}

/**
 * 严格校验正负正数
 * @param {any} target 
 */
export function isInt(target: any): boolean {
    return IntegerReg.test(target)
}

/**
 * 判断是否位float格式
 * @param target 
 */
export function isFloat(target: any): boolean {
    if (!isNumber(target)) return false;
    return target % 1 !== 0;
}

/**
 * 整数前置补零
 * @param {number|string} target 
 * @param {number} places 位数，默认2 -> 10
 */
export function prefixZero(target: number | string, places: number = 2): string {
    if (!isNumber(target) || isFloat(target)) return ''
    const condition: number = 10 ** (places - 1)
    if (+target < condition) {
        return (Array(places).join('0') + target).slice(-places)
    }
    return target + '';
}

export default {
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray
}