
interface DesensitizationOption {
  /**0.1~1 */
  quantity: number,
  /**center | start | end */
  location: string,
}

/**
 * 字符串脱敏
 * @param str 
 * @param options 
 */
export function desensitization(str: string, options?: DesensitizationOption): string {
  const str1 = '*******************'

  return ''
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
