declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
interface ConsoleOption {
    startWitch?: string;
    endWitch?: string;
    includes?: string;
}
/**默认导出对象 */
export declare const log: {
    disabledAll: () => void;
    disabled: (levels: LevelType[]) => void;
    disabledAllBy: (option: ConsoleOption) => void;
    disabledBy: (levels: LevelType[], option: ConsoleOption) => void;
};
export {};
