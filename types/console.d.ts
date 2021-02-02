declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
declare type DisabledLevel = LevelType | LevelType[];
export declare const log: {
    disabledAll: () => void;
    disabled: (level: DisabledLevel) => void;
};
export {};
