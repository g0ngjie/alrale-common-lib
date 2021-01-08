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
/**
 * 实现复制功能
 * @param {string} value 文本
 */
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
/**
 * 定时器
 */
execInterval(millisecond: number, callback: Function): Function;
/**
 * 自动结束定时器
 */
autoStopInterval(millisecond: number, stopMillisecond: number, callback: Function): Promise<void>;


```

## License
[The ISC License](./LICENSE)