// 时间工具

import { isNumber, prefixZero } from "./number";

type FotmatTsResponse = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
    fullMonth: string,
    fullDay: string,
    fullHour: string,
    fullMinutes: string,
    fullSeconds: string,
    getYMD(separate?: string): string
    getYYYYMMDD(separate?: string): string
}

/**
 * 格式化时间戳
 * @param {string|number} timestamp 
 */
export function formatTs(timestamp: string | number): FotmatTsResponse {
    if (!isNumber(timestamp)) throw new Error("timestamp is nil");
    let ts: number = +timestamp;
    // 13位毫(秒) 10位(秒)
    const tsLen: number = String(timestamp).length
    if (tsLen === 10) ts *= 1000
    const _date: Date = new Date(ts)
    const year = _date.getFullYear()
    const month = _date.getMonth() + 1
    const day = _date.getDay()
    const hour = _date.getHours()
    const minutes = _date.getMinutes()
    const seconds = _date.getSeconds()
    const milliseconds = _date.getMilliseconds()
    const fullMonth = prefixZero(month + 1)
    const fullDay = prefixZero(day)
    const fullHour = prefixZero(hour)
    const fullMinutes = prefixZero(minutes)
    const fullSeconds = prefixZero(seconds)
    const getYMD = (separate?: string): string => {
        const s = separate || ''
        return [year, s, month, s, day, ' ', hour, s, minutes, s, seconds].join('')
    }
    const getYYYYMMDD = (separate?: string): string => {
        const s = separate || ''
        return [year, s, fullMonth, s, fullDay, s, ' ', fullHour, s, fullMinutes, s, fullSeconds].join('')
    }
    return {
        year,
        month,
        day,
        hour,
        minutes,
        seconds,
        milliseconds,
        fullMonth,
        fullDay,
        fullHour,
        fullMinutes,
        fullSeconds,
        getYMD,
        getYYYYMMDD
    }
}
