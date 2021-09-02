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
/**
 * 获取浏览器内核和版本信息
 * @param {string} type 可单独获取名称 或 版本
 * @example
 * ```
 * const kernelVersion = getKernelVersion(); // => 'chrome 92.0.4515.131'
 * const kernel = getKernelVersion("name"); // => 'chrome'
 * const version = getKernelVersion("version"); // => '92.0.4515.131'
 * ```
 */
export declare function getKernelVersion(type?: 'name' | 'version'): string;
export {};
