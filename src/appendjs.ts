/**
 * html -> head 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export function appendJs(src: string, cb?: Function): void {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.head.appendChild(script)
}

/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export function appendBodyJs(src: string, cb?: Function): void {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.body.appendChild(script)
}