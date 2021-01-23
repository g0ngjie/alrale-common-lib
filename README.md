# @alrale/common-lib

- common functions
- small tool

## Installing
```javascript
$ yarn add @alrale/common-lib
```

## Functions
```typescript

/** object -> string -> object */
deepClone<T>(target: T): T;
/** object deep clone -> other object */
deepOClone(target: any): any;
// js复制
copyValue(value: string): void;

/** parse url(解析url上的参数)  */
parseQuery(url: string): any;
/** window.location.search 解码*/
decodeUrlSearch(search: string): any;

/** object -> ?xxx=xxx&xxx=xxx  */
queryToString(e: any): string;

typeIs<T>(target: T): string;

/** Conversion of Arabic numerals into simplified Chinese characters (阿拉伯数字转换为简写汉字)  */
toSimplifiedChinese(num: number): string;

/**set session | local store */
setStore(key: string, value: string, level?: string /**default session */): void;
/**set object */
setOStore(key: string, value: any, level?: string /**default session */): void;
/**get session | local store */
getStore(key: string, level?: string /**default session */): string | null;
/**get object */
getOStore(key: string, level?: string /**default session */): string | null;
/**remove store */
removeStore(key: string, level?: string /**default session */): void;

/** async  */
sleep(millisecond: number, callback: Function): void;
/** sync  */
sleepSync(millisecond: number): Promise<void>;
/** 时间戳显示为多少分钟前，多少天前的处理 */
dateDiff(timestamp: string | number): string;
/** number -> arr -> string */
week(day: number): string;
// 定时器
execInterval(millisecond: number, callback: Function): Function;
// 自动结束定时器
autoStopInterval(millisecond: number, stopMillisecond: number, callback: Function): Promise<void>;
// 随机区间整数
randomInt(max?: number, min?: number): number;
// 随机获取整数列表
randomDistinctIntArray(len?: number): number[];
// 随机区间唯一整数的列表
randomDistinctRangeArray(toMax?: number, fromMin?: number, len?: number): number[];
// 随机字符串
randomString(len?: number): string

//浏览器内核类型
getKernel(): string;
isSafari: boolean;
isChrome: boolean;
isFirefox: boolean;
isOpera: boolean;
isEdge: boolean;
isIE: boolean;

```

## License
[The ISC License](./LICENSE)