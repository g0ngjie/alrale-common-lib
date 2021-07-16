/**
 * html -> head 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export function appendJs(src: string, cb?: Function): Function {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.head.appendChild(script)
  return function () {
    document.head.removeChild(script)
  }
}

export function appendJsSync(src: string): Promise<Function> {
  return new Promise((resolve: any) => {
    const script: any = document.createElement('script')
    script.src = src
    function removeScript() {
      document.head.removeChild(script)
    }
    script.onload = resolve(removeScript)
    document.head.appendChild(script)
  })
}

/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export function appendBodyJs(src: string, cb?: Function): Function {
  const script: any = document.createElement('script')
  script.src = src
  script.onload = cb
  document.body.appendChild(script)
  return function () {
    document.body.removeChild(script)
  }
}

export function appendBodyJsSync(src: string): Promise<Function> {
  return new Promise((resolve: any) => {
    const script: any = document.createElement('script')
    script.src = src
    function removeScript() {
      document.body.removeChild(script)
    }
    script.onload = resolve(removeScript)
    document.body.appendChild(script)
  })
}