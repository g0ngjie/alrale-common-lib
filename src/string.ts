
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
