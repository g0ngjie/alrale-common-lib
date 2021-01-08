
/**
 * async
 *
 * @export
 * @param {number} millisecond
 * @param {Function} callback
 */
export function sleep(millisecond: number, callback: Function): void {
  setTimeout(() => { callback() }, millisecond);
}

/**
 * sync
 *
 * @export
 * @param {number} millisecond
 * @returns {Promise<void>}
 */
export function sleepSync(millisecond: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => { resolve() }, millisecond);
  })
}