/**
 * 定时器
 * @param {number | undefined} millisecond 毫秒 | 1000
 * @param {Function} callback
 * @returns {Function} clearInterval
 */
export declare function execInterval(millisecond: number | undefined, callback: Function): Function;
/**
 * 自动结束定时器
 * @param {number | undefined} millisecond 开始毫秒 | 1000
 * @param {number | undefined} stopMillisecond 结束时间毫秒 | 1000
 * @param {Function} callback
 */
export declare function autoStopInterval(millisecond: number | undefined, stopMillisecond: number | undefined, callback: Function): Promise<void>;
export declare const Schedule: {
    execInterval: typeof execInterval;
    autoStopInterval: typeof autoStopInterval;
};
declare const _default: {
    execInterval: typeof execInterval;
    autoStopInterval: typeof autoStopInterval;
};
export default _default;
