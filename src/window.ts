

/**
 * 获取全局对象
 */
export function globalStore(): any {
    const _secret: string = '__COMMON_LIB__';
    const _g: any = window || global
    if (_g[_secret]) return _g[_secret]
    return _g[_secret] = {}
}

/**
 * set 全局对象
 * @param {string} key 
 * @param {any} value 
 * @param {boolean} cover 
 */
export function setGlobal(key: string, value: any, cover: boolean = true): boolean {
    const _g: any = globalStore();
    if (!cover && _g[key]) return false
    _g[key] = value
    return true
}

/**
 * get 全局对象
 * @param {string} key 
 */
export function getGlobal(key: string): any {
    const _g: any = globalStore();
    return _g[key]
}