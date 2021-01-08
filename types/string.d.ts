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
export {};
