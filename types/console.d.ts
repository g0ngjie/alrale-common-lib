declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
interface ConsoleOption {
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
    disabledAll: () => void;
    disabled: (levels: LevelType[]) => void;
    disabledAllBy: (option: ConsoleOption) => void;
    disabledBy: (levels: LevelType[], option: ConsoleOption) => void;
};
export {};
