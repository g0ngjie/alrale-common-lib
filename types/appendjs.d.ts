/**
 * html -> head 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export declare function appendJs(src: string, cb?: Function): Function;
export declare function appendJsSync(src: string): Promise<Function>;
/**
 * html -> body 增加 <script src=[...]></script>
 *
 * @export
 * @param {string} src
 * @param {Function} cb
 */
export declare function appendBodyJs(src: string, cb?: Function): Function;
export declare function appendBodyJsSync(src: string): Promise<Function>;
