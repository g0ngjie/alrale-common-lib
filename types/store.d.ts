declare type Level = 'local' | 'session';
/**
 * set session | local store
 *
 * @export
 * @param {string} key
 * @param {string} value
 * @param {string} [level] session | local
 * @returns {void}
 */
export declare function setStore(key: string, value: string, level?: Level /**default session */): void;
/**
 * set object
 *
 * @export
 * @param {string} key
 * @param {*} value
 * @param {string} [level]
 * @returns {void}
 */
export declare function setOStore(key: string, value: any, level?: Level /**default session */): void;
/**
 * get session | local store
 *
 * @export
 * @param {string} key
 * @param {string} [level] session | local
 * @returns {(string | null)}
 */
export declare function getStore(key: string, level?: Level /**default session */): string | null;
/**
 * get object
 *
 * @export
 * @param {string} key
 * @param {string} [level]
 * @returns {(string | null)}
 */
export declare function getOStore(key: string, level?: Level /**default session */): string | null;
/**
 * remove store
 *
 * @export
 * @param {string} key
 * @param {string} [level]
 */
export declare function removeStore(key: string, level?: Level /**default session */): void;
export {};
