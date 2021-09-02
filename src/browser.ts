import { isBrowser } from "./env"

type IKernel = 'Nil' | 'IE7' | 'IE8' | 'IE9' | 'IE10' | 'IE11' | 'IE' | 'Opera' | 'Edge' | 'FF' | 'Safari' | 'Chrome' | 'None'

/**
 * 获取浏览器内核类型
 */
export function getKernel(): IKernel {

  if (!isBrowser) return 'Nil'

  const userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  const isOpera = userAgent.indexOf('Opera') > -1 //判断是否Opera浏览器
  const isIE =
    userAgent.indexOf('compatible') > -1 &&
    userAgent.indexOf('MSIE') > -1 &&
    !isOpera //判断是否IE浏览器
  const isEdge = userAgent.indexOf('Edge') > -1 //判断是否IE的Edge浏览器
  const isFF = userAgent.indexOf('Firefox') > -1 //判断是否Firefox浏览器
  const isSafari =
    userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') == -1 //判断是否Safari浏览器
  const isChrome =
    userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 //判断Chrome浏览器

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    const fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 'IE7'
    } else if (fIEVersion == 8) {
      return 'IE8'
    } else if (fIEVersion == 9) {
      return 'IE9'
    } else if (fIEVersion == 10) {
      return 'IE10'
    } else if (fIEVersion == 11) {
      return 'IE11'
    } else {
      //IE版本过低
      return 'IE'
    }
  }
  if (isOpera) {
    return 'Opera'
  }
  if (isEdge) {
    return 'Edge'
  }
  if (isFF) {
    return 'FF'
  }
  if (isSafari) {
    return 'Safari'
  }
  if (isChrome) {
    return 'Chrome'
  }
  return 'None'
}

export const isSafari: boolean = getKernel() === 'Safari'
export const isChrome: boolean = getKernel() === 'Chrome'
export const isFirefox: boolean = getKernel() === 'FF'
export const isOpera: boolean = getKernel() === 'Opera'
export const isEdge: boolean = getKernel() === 'Edge'
export const isIE: boolean = ['IE7', 'IE8', 'IE9', 'IE10', 'IE11', 'IE'].includes(getKernel())

/**
 * 获取浏览器内核和版本信息
 * @param {string} type 可单独获取名称 或 版本
 * @example
 * ```
 * const kernelVersion = getKernelVersion(); // => 'chrome 92.0.4515.131'
 * const kernel = getKernelVersion("name"); // => 'chrome'
 * const version = getKernelVersion("version"); // => '92.0.4515.131'
 * ```
 */
export function getKernelVersion(type?: 'name' | 'version'): string {
  const browser: any = {
    msie: false,
    firefox: false,
    opera: false,
    safari: false,
    chrome: false,
    netscape: false,
    appname: 'unknown',
    version: 0
  },
    ua = window.navigator.userAgent.toLowerCase();
  if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(ua)) {
    browser[RegExp.$1] = true;
    browser.appname = RegExp.$1;
    browser.version = RegExp.$2;
  } else if (/version\D+(\d[\d.]*).*safari/.test(ua)) {
    // safari
    browser.safari = true;
    browser.appname = 'safari';
    browser.version = RegExp.$2;
  }
  let result: string
  switch (type) {
    case 'name':
      result = browser.appname
      break;
    case 'version':
      result = browser.version
      break;
    default:
      result = browser.appname + ' ' + browser.version;
      break;
  }
  return result
}

// TODO: 获取浏览器所有信息

