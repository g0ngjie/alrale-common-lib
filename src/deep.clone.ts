
/**
 * object -> string -> object
 *
 * @export
 * @template T
 * @param {T} target
 * @returns {T}
 */
export function deepClone<T>(target: T): T {
  const todos = ['string', 'boolean', 'undefined', 'number']
  if (todos.includes(typeof target)) return target
  const new_t: T = JSON.parse(JSON.stringify(target))
  return new_t
}

/**
 * object deep clone -> other object
 *
 * @export
 * @param {Array | Object} target
 * @returns {Array | Object}
 */
export function deepOClone(target: any): any {

  const check: any[] = [Array, Object]
  if (!check.includes(target.constructor)) return target

  const targetObj: any = target.constructor === Array ? [] : {}
  for (const keys in target) {
    if (target.hasOwnProperty(keys)) {
      if (target[keys] && typeof target[keys] === 'object') {
        targetObj[keys] = target[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(target[keys])
      } else {
        targetObj[keys] = target[keys]
      }
    }
  }
  return targetObj
}