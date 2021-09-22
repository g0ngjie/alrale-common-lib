/**
 * 判断对象或数组是否包含key
 * @param object
 * @param key
 * @return boolean
 */
export declare function has(object: object | any[], key: string): boolean;
/**
 * 获取对象或数组keys列表
 * @param object
 */
export declare function keys<T extends object | any[]>(target: T): string[];
interface IEachCallback {
    (key: string | number, value: any, done: Function): void;
}
/**
 * 对象|数组遍历
 * @param target array | any
 * @param fn callback
 */
export declare function each<T extends any[] | any>(target: T, fn: IEachCallback): void;
/**
 * 获取对象或数组值
 * @param target
 */
export declare function values<T extends object | any[]>(target: T): any[];
export {};
