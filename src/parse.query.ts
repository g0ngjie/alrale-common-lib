
/**
 * 格式化url参数
 *
 * @export
 * @param {string} url
 * @returns
 */
export function parseQuery(url: string): any {
  const params: any = {};
  const query = url.split("?")[1];
  const queryArr = query.split("&");
  queryArr.forEach(item => {
    const key = item.split("=")[0];
    const value = item.split("=")[1];
    params[key] = decodeURI(value);
  });
  return params;
}

/**
 * window.location.search 解码
 * @param search 
 */
export function decodeUrlSearch(search: string): any {
  const kvList = decodeURIComponent(search).replace('?', '').split('&')
  const params = kvList.reduce((p: any, n: string) => {
    p[n.substring(0, n.indexOf('='))] = n.substring(n.indexOf('=') + 1)
    return p
  }, {})
  return params
}