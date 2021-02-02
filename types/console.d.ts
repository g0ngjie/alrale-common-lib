declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
declare type DisabledLevel = LevelType | LevelType[];
export declare const _console: {
    disabledAll: () => void;
    disabled: (level: DisabledLevel) => void;
};
export {};
