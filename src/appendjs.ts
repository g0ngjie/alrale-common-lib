/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {(Function | undefined)} cb
 */
export function appendJs(src: string, cb: Function | undefined) {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.body.appendChild(script)
}