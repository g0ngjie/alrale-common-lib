declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
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
    disabledAll: () => void;
    /**level级别禁用 */
    disabled: (levels: LevelType[]) => void;
    /**条件禁用 */
    disabledAllBy: (option: Option) => void;
    /**level级别禁用|条件过滤 */
    disabledBy: (levels: LevelType[], option: Option) => void;
    /**收集 */
    collectAll: (option: Output) => void;
    /**level级别收集|条件过滤 */
    collect: (level: LevelType, option: Output) => void;
};
export {};
