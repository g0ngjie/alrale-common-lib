
/**
 * 随机区间整数
 * @param max 
 * @param min 
 */
export function randomInt(max: number = 10, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
