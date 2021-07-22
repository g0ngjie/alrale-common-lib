declare type IType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'function' | 'date' | 'array' | 'object' | 'map' | 'regexp' | 'error' | 'document' | 'window';
export declare function typeIs<T>(target: T): IType;
export {};
