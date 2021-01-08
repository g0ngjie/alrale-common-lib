/**
 * object -> string -> object
 *
 * @export
 * @template T
 * @param {T} target
 * @returns {T}
 */
export declare function deepClone<T>(target: T): T;
/**
 * object deep clone -> other object
 *
 * @export
 * @param {Array | Object} target
 * @returns {Array | Object}
 */
export declare function deepOClone(target: any): any;
