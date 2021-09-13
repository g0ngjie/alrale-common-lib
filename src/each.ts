import { typeIs } from "./type.is";

/**
 * 判断对象或数组是否包含key
 * @param object
 * @param key
 * @return boolean
 */
export function has(object: object | any[], key: string): boolean {
    return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * 获取对象或数组keys列表
 * @param object
 */
export function keys<T extends object | any[]>(target: T): string[] {
    if (Object.keys(target)) return Object.keys(target)
    else {
        const _keys: string[] = [];
        for (const key in target) {
            if (has(target, key)) _keys.push(key);
        }
        return _keys;
    }
}

interface IEachCallback {
    (key: string | number, value: any): void
}

/**
 * 对象数组遍历
 * @param target array | any
 * @param fn callback
 */
export function each<T extends any[] | any>(target: T, fn: IEachCallback): void {
    const type = typeIs(target)

    switch (type) {
        case 'array':
            for (let i = 0; i < (<any[]>target).length; i++) fn(i, (<any[]>target)[i])
            break;
        case 'object':
            const _keys = keys(<any>target)
            for (let i = 0; i < _keys.length; i++) {
                const key = _keys[i];
                fn(key, (<any>target)[key])
            }
        default:
            break;
    }
}

/**
 * 获取对象或数组值
 * @param target
 */
export function values<T extends object | any[]>(target: T): any[] {
    if (Object.values(target)) return Object.values(target)
    else {
        const _values: any[] = []
        each<T>(target, function (_, value) {
            _values.push(value)
        })
        return _values
    }
}
