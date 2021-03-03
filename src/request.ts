import { isBrowser } from "./env";
import { queryToString } from "./query.to.string";

export async function simpleFetch(url: string = '', method: string = 'GET', body: any = {}): Promise<any> {
  if (!isBrowser) return Promise.reject('还不支持node环境')
  let query: string = '';
  method = method.toUpperCase();
  if (method === 'GET') {
    query = queryToString(body)
  } else if (method === 'POST') {
    query = JSON.stringify(body)
  }
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'force-cache',
      body: query
    });
    return response.json()
  } catch (error) {
    const errMsg = error + '';
    if (errMsg == 'ReferenceError: fetch is not defined') return 'node环境不支持'
    return error + ''
  }
}

export function post(url: string, data?: any): Promise<any> {
  if (!isBrowser) return Promise.reject('还不支持node环境')
  return simpleFetch(url, 'POST', data)
}

export function get(url: string, params?: any): Promise<any> {
  if (!isBrowser) return Promise.reject('还不支持node环境')
  return simpleFetch(url, 'GET', params)
}
