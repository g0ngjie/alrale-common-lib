import { typeIs } from "./type.is";
import { isNumber } from "./number";

/**
 * 比较大小
 * @returns -1 0 1
 */
function __compareSize(small: any, big: any): number {
    let before: any, after: any;
    before = isNumber(small) ? +small : small
    after = isNumber(big) ? +big : big
    if (before < after) return 1;
    if (before === after) return 0;
    return -1;
}

/**
 * 排序
 */
/**
 * 对象key排序
 * @param {Map | Object} map 
 * @param {boolean} isKeyUpSort 
 */
export function sortMapByKey(map: any, isKeyUpSort: boolean = true) {
    const keys: any[] = new Array<any>();
    const isMap: boolean = typeIs(map) === 'map';
    if (isMap) {
        map.forEach((_: any, key: any) => {
            keys.push(key);
        });
    } else {
        for (const key in map) {
            if (Object.prototype.hasOwnProperty.call(map, key)) {
                keys.push(key)
            }
        }
    }
    if (isKeyUpSort) {
        keys.sort((key1: any, key2: any) => __compareSize(key2, key1));
    } else {
        keys.sort((key1: any, key2: any) => __compareSize(key1, key2));
    }
    let newMap: any;
    if (isMap) {
        newMap = new Map();
        keys.forEach(key => {
            newMap.set(key, map.get(key));
        });
    } else {
        newMap = {}
        keys.forEach(key => {
            newMap[key] = map[key]
        });
    }
    return newMap;
}

/**
 * 对象to value数组
 * @param {Object} target 
 */
export function objectToVArray(target: any): any[] {
    if (typeIs(target) !== 'object') return target;
    const arr: any[] = [];
    for (const key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            const item = target[key];
            arr.push(item)
        }
    }
    return arr;
}

/**
 * Map to value数组
 * @param {Map<any, any>} target 
 */
export function mapToVArray(target: any): any[] {
    if (typeIs(target) !== 'map') return target;
    const arr: any[] = [];
    target.forEach((value: any) => arr.push(value))
    return arr;
}

/**
 * 对象to 对象数组
 * @param {Object | Map<any, any>} target 
 */
export function objectToArray(target: any): any[] {
    const arr: any[] = [];
    if (typeIs(target) === 'object') {
        for (const key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                const item = target[key];
                arr.push({ [key]: item })
            }
        }
    } else if (typeIs(target) === 'map') {
        target.forEach((value: any, key: any) => {
            arr.push({ [key]: value })
        })
    }
    return arr;
}