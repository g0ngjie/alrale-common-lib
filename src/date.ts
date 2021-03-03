// 时间工具

import { isNumber, prefixZero } from "./number";

type FotmatTsResponse = {
    year: number,
    month: number,
    day: number,
    week: number,
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
    const week = _date.getDay()
    const day = _date.getDate()
    const hour = _date.getHours()
    const minutes = _date.getMinutes()
    const seconds = _date.getSeconds()
    const milliseconds = _date.getMilliseconds()
    const fullMonth = prefixZero(month)
    const fullDay = prefixZero(day)
    const fullHour = prefixZero(hour)
    const fullMinutes = prefixZero(minutes)
    const fullSeconds = prefixZero(seconds)
    const getYMD = (separate: string = '-', semicolon: string = ':'): string => {
        const _s = separate || ''
        const _se = semicolon || ''
        return [year, _s, month, _s, day, ' ', hour, _se, minutes, _se, seconds].join('')
    }
    const getYYYYMMDD = (separate: string = '-', semicolon: string = ':'): string => {
        const _s = separate || ''
        const _se = semicolon || ''
        return [year, _s, fullMonth, _s, fullDay, ' ', fullHour, _se, fullMinutes, _se, fullSeconds].join('')
    }
    return {
        year,
        month,
        day,
        week,
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
