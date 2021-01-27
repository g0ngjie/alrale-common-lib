
export function typeIs<T>(target: T): string {
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
    '[object RegExp]': 'regexp',
    '[object Error]': 'error',
    '[object HTMLDocument]': 'document',
    '[object global]': 'window' // window 是全局对象 global 的引用
  }
  const find_proto: string = Object.prototype.toString.call(target)
  const type_to_string: string = Type[find_proto]
  return type_to_string
}
