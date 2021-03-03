
/**Url */
export const InternetURLReg = /^((https|http|ftp|rtsp|mms)?:\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
/**身份证号（15位或18位数字） */
export const IDNumberReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
/**邮箱 */
export const EmailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
/**中文 */
export const ChineseReg = /^[\u4e00-\u9fa5],{0,}$/;
/**整数 */
export const IntegerReg = /^-?\d+$/;
/**非负浮点数（正浮点数 + 0） */
export const NotNegativeFloatReg = /^\d+(\.\d+)?$/;
/**正浮点数 */
export const PlusFloatReg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
/**非正浮点数（负浮点数 + 0） */
export const NotPositiveFloatReg = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/;
/**负浮点数 */
export const NegativeFloatReg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
/**浮点数 */
export const MinusFloatReg = /^(-?\d+)(\.\d+)?$/;