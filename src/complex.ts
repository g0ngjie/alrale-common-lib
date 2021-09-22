// 复杂函数

import { typeIs } from "./type.is";

type TTargetConversionFormattedTarget = {
    [propName: string]: any;
}

type TLabel = { label: string, formatter: (value: string) => any }

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
export function targetConversionIntoList(target: TTargetConversionFormattedTarget, formattedObject: { [propName: string]: string | TLabel }, options?: {
    /**展示 */
    label: string
    /**结果 */
    value: string
}): any[] {
    let _options;
    if (options) _options = options
    else _options = { label: 'label', value: 'value' }
    const returnList: any[] = [];
    const { label, value } = _options
    // 判断target类型
    if (typeIs(target) === 'object') {
        for (const key in formattedObject) {
            if (Object.prototype.hasOwnProperty.call(formattedObject, key)) {
                const getLabel: string | TLabel = formattedObject[key];
                const getValue: any = target[key]
                if (typeIs(getLabel) === 'object') {
                    const { formatter } = (getLabel as TLabel)
                    returnList.push({
                        [label]: (<TLabel>getLabel).label,
                        [value]: formatter(getValue)
                    })
                } else
                    returnList.push({
                        [label]: getLabel,
                        [value]: getValue
                    })
            }
        }
    }
    return returnList
}

/**
 * 进度值映射
 * @param progress 进度
 * @param mapping 关系映射参照
 */
export function adjustProgress(progress: number, mapping: { real: number; target: number }[] = []): number {
    if (progress < 0) return 0;

    if (!mapping || mapping.length <= 0) return progress;

    // 第一个
    const first = mapping[0];
    if (progress <= first.real) return progress * (first.target / first.real);

    // 最后一个
    const last = mapping[mapping.length - 1];
    if (progress >= last.target) return last.target;

    const curIndex = mapping.findIndex(m => m.real >= progress);
    if (!curIndex) return progress;

    const cur = mapping[curIndex];
    const pre = mapping[curIndex - 1];
    // 原基数 + 实际进度/最大实际进度 * 期望间距
    return pre.target + (progress - pre.real) / (cur.real - pre.real) * (cur.target - pre.target);
}
