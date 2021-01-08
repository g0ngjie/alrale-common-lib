/**
 * 定时器
 * @param millisecond 毫秒
 * @param callback
 * @returns {Function} clearInterval
 */
export declare function execInterval(millisecond: number, callback: Function): Function;
/**
 * 自动结束定时器
 * @param millisecond 开始毫秒
 * @param stopMillisecond 结束时间毫秒
 * @param callback
 */
export declare function autoStopInterval(millisecond: number, stopMillisecond: number, callback: Function): Promise<void>;
export declare const Schedule: {
    execInterval: typeof execInterval;
    autoStopInterval: typeof autoStopInterval;
};
declare const _default: {
    execInterval: typeof execInterval;
    autoStopInterval: typeof autoStopInterval;
};
export default _default;
