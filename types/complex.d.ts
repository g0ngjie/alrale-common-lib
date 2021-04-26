declare type ITargetConversionFormattedTarget = {
    [propName: string]: any;
};
/**
 * 目标转换成列表
 * @param target 目标对象
 * @param formattedObject 格式化对象
 * @param options K/V
 */
export declare function targetConversionIntoList(target: ITargetConversionFormattedTarget, formattedObject: {
    [propName: string]: string;
}, options?: {
    /**展示 */
    label: string;
    /**结果 */
    value: string;
}): any[];
export {};
