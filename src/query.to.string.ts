import { typeIs } from "./type.is";

function cleanArray(actual: any[]) {
  const newArray: string[] = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * object -> ?xxx=xxx&xxx=xxx
 *
 * @export
 * @param {Object} e
 * @returns {string}
 */
export function queryToString(e: any): string {
  if (!e) return ''
  const type: string = typeIs(e)
  if (type !== 'object') return ''
  let _params: string = cleanArray(Object.keys(e).map(key => {
    if (!e[key]) return ''
    return `${encodeURIComponent(key)}=${encodeURIComponent(e[key])}`
  })).join('&')
  return _params ? `?${_params}` : ''
}