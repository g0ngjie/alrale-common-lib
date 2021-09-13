/**
 * 时间戳显示为多少分钟前，多少天前的处理
 * eg.
 * dateDiff(1411111111111); // 2014年09月19日
 * dateDiff(1481111111111); // 9月前
 * dateDiff(1499911111111); // 2月前
 * dateDiff(1503211111111); // 3周前
 * dateDiff(1505283100802); // 1分钟前
 *
 * @export
 * @param {(string | number)} timestamp
 * @returns
 */
export declare function dateDiff(timestamp: string | number): string;
/**
 *
 * number -> arr -> string
 * @export
 * @param {number} day
 * @returns
 */
export declare function week(day: number): string;
