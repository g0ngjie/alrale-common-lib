import { queryToString } from "./query.to.string";

interface Request {
  url: string,
  methods: string,
  params?: string,
  data?: any,
}

function xhr(req: Request, callback?: Function) {
  const xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    switch (xhr.readyState) {
      case 0:
        // 未初始化....
        break;
      case 1:
        // 请求参数已准备，尚未发送请求...
        break;
      case 2:
        // 已经发送请求,尚未接收响应
        break;
      case 3:
        // 请求处理中 正在接受部分响应.....
        break;
      case 4:
        // 响应全部接受完毕
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          if (callback) callback(xhr.response)
        } else {
          if (callback) callback(xhr.status)
        }
        break;
    }
  }
  const { url, params, methods } = req
  const _qs: string = queryToString(params)
  xhr.responseType = 'json'
  xhr.open(methods, `${url}${_qs}`);
  xhr.send();
}

export function get(url: string, params?: any, callback?: Function) {
  return xhr({ url, params, methods: 'GET' }, callback)
}

export function getSync(url: string, params?: any) {
  return new Promise(resolve => {
    xhr({ url, params, methods: 'GET' }, (e: any) => {
      resolve(e)
    })
  })
}

export function post() {

}

export function postSync() {

}