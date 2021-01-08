/**
 * async
 *
 * @export
 * @param {number} millisecond
 * @param {Function} callback
 */
export declare function sleep(millisecond: number, callback: Function): void;
/**
 * sync
 *
 * @export
 * @param {number} millisecond
 * @returns {Promise<void>}
 */
export declare function sleepSync(millisecond: number): Promise<void>;
