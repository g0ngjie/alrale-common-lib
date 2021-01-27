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