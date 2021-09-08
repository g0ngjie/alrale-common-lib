/**
 * 实现复制功能
 * @param {string} value 文本
 */
export declare function copyValue(value: string): void;
declare type TypeBehavior = 'contextmenu' | 'selectstart' | 'copy';
/**
 * 禁止浏览器行为 选择|复制|...
 * @param {TypeBehavior} types 行为
 */
export declare function disableBehavior(types: TypeBehavior[]): void;
export {};
