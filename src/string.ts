import os from 'os'
import crypto from 'crypto'
import { typeIs } from './type.is';

/**
 * 字符串倍数拼接
 * @param str 
 * @param multiple 
 */
function __multipleStr(str: string, multiple: number = 1) {
  let target = '';
  for (let i = 0; i < multiple; i++) {
    target += str;
  }
  return target;
}

/**
 * 名字脱敏
 * @param str
 */
export function nameDesensitization(str: string = ''): string {
  // 为空|一个字符 直接返回
  if (str.length < 2) return str;

  const chars: string[] = [];
  let name: string = '';
  for (let i = 0; i < str.length; i++) {
    const char: string = str[i];
    chars[i] = char;
  }
  if (chars.length === 2) name = str.replace(str.substr(1), __multipleStr('*', 1));
  else if (chars.length > 2) {
    name = str.replace(str.substring(1, chars.length - 1), __multipleStr('*', chars.length - 2));
  }
  return name;
}

/**
 * 字符串脱敏
 * @param {string} str 
 * @param {number} startIndex 
 * @param {number} endIndex 
 */
export function desensitization(str: string = '', startIndex: number = 0, endIndex: number): string {
  // 为空|一个字符 直接返回
  if (str.length < 2) return str;
  if (!endIndex) endIndex = str.length;

  let target: string = '';
  for (let i = 0; i < str.length; i++) {
    const char: string = str[i];
    if (i >= startIndex && i < endIndex) target += '*';
    else target += char;
  }
  return target;
}

/**
 * 随机字符串
 * @param len 长度
 */
export function randomString(len: number = 32): string {
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const chars: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const maxPos: number = chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 字符串索引位置列表
 * @param {string} target 
 * @param {string} search 
 */
export function positionOfStringIndexes(target: string = '', search: string = ''): number[] {
  let index = target.indexOf(search), count = 0; // 字符串出现次数
  const indexes = index !== -1 ? [index] : []
  while (index !== -1) {
    count++;
    index = target.indexOf(search, index + 1);
    if (index !== -1) indexes.push(index)
  }
  return indexes
}

/**
 * 唯一(24位长度)Id
 */
export function uniqueId(): string {
  const { hostname } = os;
  const hash: crypto.Hash = crypto.createHash('sha256');
  const hostName: string = hostname()
  hash.update(hostName)
  // 8位
  const hashTime: string = Math.floor((Date.now() / 1000)).toString(16);
  // 6位
  const hashHost: string = hash.digest('hex').slice(0, 6)
  // 4位
  const hashRandomId: string = Math.random().toString(36).substr(2).slice(0, 4);
  // 6位
  const hashRandomStr: string = randomString(6)
  const unId: string = [hashTime, hashHost, hashRandomId, hashRandomStr].join('')
  return unId.toLowerCase()
}

/**guid */
export function guid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**uuid */
export function uuid(): string {
  const s: any[] = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  const uuid: string = s.join("");
  return uuid;
}

/**guid2 */
export function guid2(): string {
  const S4: () => string = (): string => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

/**
 * 指定长度和基数
 * @param len 长度
 * @param radix 基数
 * @description uuid2(16, 16) // "277571702EE33E11"
 */
export function uuid2(len: number, radix: number): string {
  const chars: string[] = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid: any[] = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    let r: number;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}

/**
 * 字符串后缀获取、判断
 * @param {string} target 
 * @param {string} separator 
 * @param {any[]|string} condition 
 * @example
 * ```
 * stringExtension('flower.png', '.'); //  => png
 * stringExtension('avatar.jpg', '.', ['png', 'jpg']); // => true
 * stringExtension('xxx@gmail.com', '@'); // => gmail.com
 * ```
 */
export function stringExtension(target: string, separator: string, condition?: any[] | string): boolean | string {
  if (!target || typeIs(target) !== 'string') return false
  if (!separator || typeIs(separator) !== 'string') return false
  const index: number = target.lastIndexOf(separator);
  // 获取后缀
  const ext: string = target.substr(index + 1);
  // 如果有条件，则判断是否包含
  if (condition) {
    if (typeIs(condition) === 'array' && condition.length > 0) return condition.includes(ext)
    else if (typeIs(condition) === 'string') return condition === ext
  } else return ext
  return false
}

/**
 * utf8转base64
 * @param {string} str
 * @example ```
 * utf8ToBase64('@alrale/common-lib'); // "QGFscmFsZS9jb21tb24tbGli"
 * ```
 */
export function utf8ToBase64(str: string): string {
  return window.btoa(unescape(encodeURIComponent(str)))
}

/**
 * base64解码utf8
 * @param {string} str
 * @example ```
 * base64ToUtf8('QGFscmFsZS9jb21tb24tbGli'); // "@alrale/common-lib"
 * ```
 */
export function base64ToUtf8(str: string): string {
  return decodeURIComponent(escape(window.atob(str)))
}
