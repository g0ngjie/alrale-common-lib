// 复杂函数

import { typeIs } from "./type.is";

type ITargetConversionFormattedTarget = {
    [propName: string]: any;
}

/**
 * 目标转换成列表
 * @param target 目标对象
 * @param formattedObject 格式化对象
 * @param options K/V
 */
export function targetConversionIntoList(target: ITargetConversionFormattedTarget, formattedObject: { [propName: string]: string }, options?: {
    /**展示 */
    label: string
    /**结果 */
    value: string
}) {
    let _options;
    if (options) _options = options
    else _options = { label: 'label', value: 'value' }
    const returnList: any[] = [];
    const { label, value } = _options
    // 判断target类型
    if (typeIs(target) === 'object') {
        for (const key in formattedObject) {
            if (Object.prototype.hasOwnProperty.call(formattedObject, key)) {
                const getLabel = formattedObject[key];
                const getValue = target[key]
                returnList.push({
                    [label]: getLabel,
                    [value]: getValue
                })
            }
        }
    }
    return returnList
}
