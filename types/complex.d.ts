declare type TTargetConversionFormattedTarget = {
    [propName: string]: any;
};
declare type TLabel = {
    label: string;
    formatter: (value: string) => any;
};
/**
 * 目标转换成列表
 * @param target 目标对象
 * @param formattedObject 格式化对象
 * @param options K/V
 * @example
 * ```
 * const obj1 = { name: 'zhangsan', age: 18 };
 * const getList1 = targetConversionIntoList(obj1, {
 *   name: '姓名',
 *   age: '年龄'
 * }); // => [{ label: '姓名', value: 'zhangsan' }, { label: '年龄', value: 18 }]
 * ```
 * @example
 * ```
 * const obj2 = { name: 'lisi' }
 * const getList2 = targetConversionIntoList(obj2, {
 *   name: '姓名',
 * }, { label: 'field', value: 'name' }); // => [{ field: '姓名', name: 'lisi' }]
 * ```
 */
export declare function targetConversionIntoList(target: TTargetConversionFormattedTarget, formattedObject: {
    [propName: string]: string | TLabel;
}, options?: {
    /**展示 */
    label: string;
    /**结果 */
    value: string;
}): any[];
/**
 * 进度值映射
 * @param progress 进度
 * @param mapping 关系映射参照
 */
export declare function adjustProgress(progress: number, mapping?: {
    real: number;
    target: number;
}[]): number;
export {};
