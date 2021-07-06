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
 * }); // => [{ label: '姓名', value: 'zhangsan' }, { label: '年龄', age: 18 }]
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
