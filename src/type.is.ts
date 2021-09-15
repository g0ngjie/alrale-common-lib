type IType = 'string' | 'number' | 'boolean' | 'symbol' | 'undefined' | 'null' | 'function' | 'date' | 'array' | 'object' | 'map' | 'set' | 'regexp' | 'error' | 'document' | 'window'

export function typeIs<T>(target: T): IType {
  const Type: any = {
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Boolean]': 'boolean',
    '[object Symbol]': 'symbol',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Function]': 'function',
    '[object Date]': 'date',
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object Map]': 'map',
    '[object Set]': 'set',
    '[object RegExp]': 'regexp',
    '[object Error]': 'error',
    '[object HTMLDocument]': 'document',
    '[object global]': 'window' // window 是全局对象 global 的引用
  }
  const find_proto: string = Object.prototype.toString.call(target)
  const type_to_string: IType = Type[find_proto]
  return type_to_string
}

export const isString = (target: any): boolean => typeIs(target) === 'string'
/**判断为数字类型 */
export const isNumberExt = (target: any): boolean => typeIs(target) === 'number'
export const isBoolean = (target: any): boolean => typeIs(target) === 'boolean'
export const isSymbol = (target: any): boolean => typeIs(target) === 'symbol'
export const isUndefined = (target: any): boolean => typeIs(target) === 'undefined'
export const isNull = (target: any): boolean => typeIs(target) === 'null'
export const isFunction = (target: any): boolean => typeIs(target) === 'function'
export const isDate = (target: any): boolean => typeIs(target) === 'date'
export const isArray = (target: any): boolean => typeIs(target) === 'array'
export const isObject = (target: any): boolean => typeIs(target) === 'object'
export const isMap = (target: any): boolean => typeIs(target) === 'map'
export const isSet = (target: any): boolean => typeIs(target) === 'set'
export const isRegExp = (target: any): boolean => typeIs(target) === 'regexp'
export const isError = (target: any): boolean => typeIs(target) === 'error'