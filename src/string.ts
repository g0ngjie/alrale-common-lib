
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