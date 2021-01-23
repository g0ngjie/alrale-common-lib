
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
export function randomDistinctIntArray(len: number): number[] {
    const temp: number[] = new Array();
    const target: number[] = Array.from(Array(len), (_, v) => v)
    for (let i = 0; i < len; i++) {
        const randomIndex: number = Math.floor(Math.random() * target.length);
        temp.push(target[randomIndex])
        target.splice(randomIndex, 1)
    }
    return temp
}

export const Number = {
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray
}

export default {
    randomInt,
    randomDistinctIntArray,
    randomDistinctRangeArray
}