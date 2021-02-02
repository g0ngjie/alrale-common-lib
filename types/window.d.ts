/**
 * 获取全局对象
 */
export declare function globalStore(): any;
/**
 * set 全局对象
 * @param {string} key
 * @param {any} value
 * @param {boolean} cover
 */
export declare function setGlobal(key: string, value: any, cover?: boolean): boolean;
/**
 * get 全局对象
 * @param {string} key
 */
export declare function getGlobal(key: string): any;
/**
 * 删除 对象数据
 * @param {string} key
 */
export declare function removeGlobalItem(key: string): boolean;
