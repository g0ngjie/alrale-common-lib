interface DesensitizationOption {
    /**0.1~1 */
    quantity: number;
    /**center | start | end */
    location: string;
}
/**
 * 字符串脱敏
 * @param str
 * @param options
 */
export declare function desensitization(str: string, options?: DesensitizationOption): string;
/**
 * 随机字符串
 * @param len 长度
 */
export declare function randomString(len?: number): string;
export {};
