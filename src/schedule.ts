
// function setInt

/**
 * 定时器
 * @param millisecond 毫秒
 * @param callback 
 * @returns {Function} clearInterval
 */
export function execInterval(millisecond: number, callback: Function): Function {
    const intervalId = setInterval(() => callback(), millisecond)
    return () => clearInterval(intervalId)
}

/**
 * 自动结束定时器
 * @param millisecond 开始毫秒
 * @param stopMillisecond 结束时间毫秒
 * @param callback 
 */
export function autoStopInterval(millisecond: number, stopMillisecond: number, callback: Function): Promise<void> {
    return new Promise(resolve => {
        const intervalId = setInterval(() => callback(), millisecond)
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