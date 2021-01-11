
// function setInt

/**
 * 定时器
 * @param {number | undefined} millisecond 毫秒 | 1000
 * @param {Function} callback 
 * @returns {Function} clearInterval
 */
export function execInterval(millisecond: number = 1000, callback: Function): Function {
    const intervalId = setInterval(() => callback(), millisecond)
    return () => clearInterval(intervalId)
}

/**
 * 自动结束定时器
 * @param {number | undefined} interval 间隔毫秒 | 1000
 * @param {number | undefined} stopMillisecond 结束时间毫秒 | 1000
 * @param {Function} callback 
 */
export function autoStopInterval(interval: number = 1000, stopMillisecond: number = 1000, callback: Function): Promise<void> {
    return new Promise(resolve => {
        const intervalId = setInterval(() => callback(), interval)
        setTimeout(() => {
            clearInterval(intervalId)
            resolve()
        }, stopMillisecond + 100);
    })
}

export const Schedule = {
    execInterval,
    autoStopInterval
}

export default {
    execInterval,
    autoStopInterval
}