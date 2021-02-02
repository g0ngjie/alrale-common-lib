declare type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';
declare type DisabledLevel = string | LevelType[];
declare const _default: {
    disabledAll: () => void;
    disabled: (level: DisabledLevel) => void;
};
export default _default;
