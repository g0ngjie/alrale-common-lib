declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
export declare const log: {
    disabledAll: () => void;
    disabled: (levels: LevelType[]) => void;
};
export {};
