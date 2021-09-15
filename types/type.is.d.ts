declare type IType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'function' | 'date' | 'array' | 'object' | 'map' | 'set' | 'regexp' | 'error' | 'document' | 'window';
export declare function typeIs<T>(target: T): IType;
export declare const isString: (target: any) => boolean;
/**判断为数字类型 */
export declare const isNumberExt: (target: any) => boolean;
export declare const isBoolean: (target: any) => boolean;
export declare const isSymbol: (target: any) => boolean;
export declare const isUndefined: (target: any) => boolean;
export declare const isNull: (target: any) => boolean;
export declare const isFunction: (target: any) => boolean;
export declare const isDate: (target: any) => boolean;
export declare const isArray: (target: any) => boolean;
export declare const isObject: (target: any) => boolean;
export declare const isMap: (target: any) => boolean;
export declare const isSet: (target: any) => boolean;
export declare const isRegExp: (target: any) => boolean;
export declare const isError: (target: any) => boolean;
export {};
