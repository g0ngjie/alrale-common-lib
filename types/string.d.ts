/**
 * 名字脱敏
 * @param str
 */
export declare function nameDesensitization(str?: string): string;
/**
 * 字符串脱敏
 * @param {string} str
 * @param {number} startIndex
 * @param {number} endIndex
 */
export declare function desensitization(str: string | undefined, startIndex: number | undefined, endIndex: number): string;
/**
 * 随机字符串
 * @param len 长度
 */
export declare function randomString(len?: number): string;
/**
 * 字符串索引位置列表
 * @param {string} target
 * @param {string} search
 */
export declare function positionOfStringIndexes(target?: string, search?: string): number[];
