
const DEFAULT_LEVEL: string = 'session'

interface Store {
  [key: string]: any
}

const store = (level?: string): Storage => {
  const _store: Store = { local: localStorage, session: sessionStorage }
  return _store[level || DEFAULT_LEVEL]
}

function stringifyJSON(e: any): string {
  return JSON.stringify(e)
}

function parseJSON(e: string | null): any {
  if (!e) return
  return JSON.parse(e)
}
/**
 * set session | local store
 *
 * @export
 * @param {string} key
 * @param {string} value
 * @param {string} [level] session | local
 * @returns {void}
 */
export function setStore(key: string, value: string, level?: string /**default session */): void {
  return store(level).setItem(key, value)
}

/**
 * set object
 *
 * @export
 * @param {string} key
 * @param {*} value
 * @param {string} [level]
 * @returns {void}
 */
export function setOStore(key: string, value: any, level?: string /**default session */): void {
  return store(level).setItem(key, stringifyJSON(value))
}

/**
 * get session | local store
 *
 * @export
 * @param {string} key
 * @param {string} [level] session | local
 * @returns {(string | null)}
 */
export function getStore(key: string, level?: string /**default session */): string | null {
  return store(level).getItem(key)
}

/**
 * get object
 *
 * @export
 * @param {string} key
 * @param {string} [level]
 * @returns {(string | null)}
 */
export function getOStore(key: string, level?: string /**default session */): string | null {
  return parseJSON(getStore(key, level))
}

/**
 * remove store
 *
 * @export
 * @param {string} key
 * @param {string} [level]
 */
export function removeStore(key: string, level?: string /**default session */): void {
  store(level).removeItem(key)
}