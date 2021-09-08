/**
 * 实现复制功能
 * @param {string} value 文本
 */
export declare function copyValue(value: string): void;
declare type TypeBehavior = 'contextmenu' | 'selectstart' | 'copy' | 'dragstart';
/**
 * 禁止浏览器行为 选择|复制|拖拽|...
 * @param {TypeBehavior} types 行为
 */
export declare function disableBehavior(types: TypeBehavior[]): void;
/**
 * 滑滚动页面到顶部
 * 仅适用于原生
 */
export declare function scrollToTop(): void;
export {};
