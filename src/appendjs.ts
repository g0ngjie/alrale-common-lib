/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {(Function | undefined)} cb
 */
export function appendJs(src: string, cb: Function | undefined): Function {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.head.appendChild(script)
  return function () {
    document.head.removeChild(script)
  }
}