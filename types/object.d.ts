/**
 * 对象key排序
 * @param {Map | Object} map
 * @param {boolean} isKeyUpSort
 */
export declare function sortMapByKey(map: any, isKeyUpSort?: boolean): any;
/**
 * Map to value数组
 * @param {Map<any, any>} target
 */
export declare function mapToVArray(target: any): any[];
/**
 * 对象to 对象数组
 * @param {Object | Map<any, any>} target
 */
export declare function objectToArray(target: any): any[];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * By Vue
 */
export declare function makeMap(str: string, expectsLowerCase: boolean): (val: string) => any;
