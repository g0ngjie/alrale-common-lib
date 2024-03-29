declare type Level = 'info' | 'log' | 'debug' | 'warn' | 'error';
interface Output {
    /**起始-关键词 */
    prefix: string;
    /**回调 */
    callback: (...args: any) => any;
}
interface Option {
    /**字符串 以foo开头 */
    startWitch?: string;
    /**字符串以 foo结尾 */
    endWitch?: string;
    /**字符串包含 foo */
    include?: string;
    /**开始-字符串包含数组 */
    startWitchs?: string[];
    /**结束-字符串包含数组 */
    endWidths?: string[];
    /**包含-字符串包含数组 */
    includes?: string[];
}
/**默认导出对象 */
export declare const log: {
    /**全部禁用 */
    skipAll: () => void;
    /**level级别禁用 */
    skip: (levels: Level[]) => void;
    /**条件禁用 */
    skipAllBy: (option: Option) => void;
    /**level级别禁用|条件过滤 */
    skipBy: (levels: Level[], option: Option) => void;
    /**收集 */
    collectAll: (option: Output) => void;
    /**level级别收集|条件过滤 */
    collect: (level: Level, option: Output) => void;
    /**只展示[prefix]相关 */
    onlyAll: (option: Option) => void;
    /**level级别只展示[prefix]相关 */
    only: (level: Level, option: Option) => void;
};
export {};
