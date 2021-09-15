import { each } from "./each";
import { isArray, isObject, isString } from "./type.is";

const parse = JSON.parse

/**反序列化 */
export function parseJSON(target: any): any {
    try {
        // 字符串类型
        if (isString(target)) return parse(target)
        // 对象
        if (isObject(target)) return target
        // 数组
        if (isArray(target)) return target.map((item: any) => parseJSON(item))
    } catch (error) {
        return target
    }
    // 其他类型
    return target
}

/**反序列化[深度] */
export function parseJsonDeep(target: any, cache?: any): any {
    try {
        // 字符串类型
        if (isString(target)) {
            const obj = parse(target)
            return parseJsonDeep(obj)
        }
        // 对象
        if (isObject(target)) {
            if (!cache) cache = {}
            each<object>(target, function (key, value) {
                cache[key] = parseJsonDeep(value, cache)
            })
            return cache
        }
        // 数组
        if (isArray(target)) {
            if (!cache) cache = []
            each<any[]>(target, function (key, value) {
                cache[key] = parseJsonDeep(value, cache[key])
            })
            return cache
        }
    } catch (error) {
        return target
    }
    return target
}
