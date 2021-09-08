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
/**
 * 唯一(24位长度)Id
 */
export declare function uniqueId(): string;
/**guid */
export declare function guid(): string;
/**uuid */
export declare function uuid(): string;
/**guid2 */
export declare function guid2(): string;
/**
 * 指定长度和基数
 * @param len 长度
 * @param radix 基数
 * @description uuid2(16, 16) // "277571702EE33E11"
 */
export declare function uuid2(len: number, radix: number): string;
/**
 * 字符串后缀获取、判断
 * @param {string} target
 * @param {string} separator
 * @param {any[]|string} condition
 * @example
 * ```
 * stringExtension('flower.png', '.'); //  => png
 * stringExtension('avatar.jpg', '.', ['png', 'jpg']); // => true
 * stringExtension('xxx@gmail.com', '@'); // => gmail.com
 * ```
 */
export declare function stringExtension(target: string, separator: string, condition?: any[] | string): boolean | string;
/**
 * utf8转base64
 * @param {string} str
 * @example ```
 * utf8ToBase64('@alrale/common-lib'); // "QGFscmFsZS9jb21tb24tbGli"
 * ```
 */
export declare function utf8ToBase64(str: string): string;
/**
 * base64解码utf8
 * @param {string} str
 * @example ```
 * base64ToUtf8('QGFscmFsZS9jb21tb24tbGli'); // "@alrale/common-lib"
 * ```
 */
export declare function base64ToUtf8(str: string): string;
