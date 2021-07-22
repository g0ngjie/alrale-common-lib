declare type IKernel = 'Nil' | 'IE7' | 'IE8' | 'IE9' | 'IE10' | 'IE11' | 'IE' | 'Opera' | 'Edge' | 'FF' | 'Safari' | 'Chrome' | 'None';
/**
 * 获取浏览器内核类型
 */
export declare function getKernel(): IKernel;
export declare const isSafari: boolean;
export declare const isChrome: boolean;
export declare const isFirefox: boolean;
export declare const isOpera: boolean;
export declare const isEdge: boolean;
export declare const isIE: boolean;
export {};
