import { typeIs } from "./type.is";

type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';

interface ConsoleOption {
    /**字符串 以foo开头 */
    startWitch?: string,
    /**字符串以 foo结尾 */
    endWitch?: string,
    /**字符串包含 foo */
    include?: string,
    /**开始-字符串包含数组 */
    startWitchs?: string[],
    /**结束-字符串包含数组 */
    endWidths?: string[],
    /**包含-字符串包含数组 */
    includes?: string[],
}

interface AllLogOption extends ConsoleOption {
    disabledAll?: boolean,
}
interface LogOption extends ConsoleOption {
    disabled?: boolean,
    level: LevelType
}

/**数组是否存在数据 */
function _hasArrayData(list: any[]): boolean {
    if (typeIs(list) !== 'array') return false
    return list.length > 0
}

/**字符串开始是否包含 */
function _hasStartWitch(startStr: string, args: any[]): boolean {
    if (!_hasArrayData(args)) return false
    const zero: any = args[0]
    if (typeIs(zero) !== 'string') return false
    return zero.startsWith(startStr)
}

/**字符串结束是否包含 */
function _hasEndWitch(endStr: string, args: any[]): boolean {
    if (!_hasArrayData(args)) return false
    const ending: any = args[args.length - 1]
    if (typeIs(ending) !== 'string') return false
    return endStr.endsWith(endStr)
}

/**字符串是否包含 */
function _hasIncludes(includeStr: string, args: any[]): boolean {
    if (!_hasArrayData(args)) return false
    for (let i = 0; i < args.length; i++) {
        const item: any = args[i];
        if (typeIs(item) === 'string') {
            if (item.includes(includeStr)) return true
        }
    }
    return false
}

/**统一过滤字符串 */
function _filterString(option: ConsoleOption, args: any[]): boolean {
    const { startWitch, endWitch, include, startWitchs, endWidths, includes } = option || {}
    // 如果包含 则不输出
    if (startWitch && _hasStartWitch(startWitch, args)) return true
    if (endWitch && _hasEndWitch(endWitch, args)) return true
    if (include && _hasIncludes(include, args)) return true
    if (startWitchs && typeIs(startWitchs) === 'array') {
        for (let i = 0; i < startWitchs.length; i++) {
            const startStr: any = startWitchs[i];
            if (startStr && _hasStartWitch(startStr, args)) return true
        }
    }
    if (endWidths && typeIs(endWidths) === 'array') {
        for (let i = 0; i < endWidths.length; i++) {
            const endStr: any = endWidths[i];
            if (endStr && _hasEndWitch(endStr, args)) return true
        }
    }
    if (includes && typeIs(includes) === 'array') {
        for (let i = 0; i < includes.length; i++) {
            const includeStr: any = includes[i];
            if (includeStr && _hasIncludes(includeStr, args)) return true
        }
    }
    return false
}

/**单级别日志输出 */
function _log(option: LogOption): void {
    const { level, disabled } = option || {}
    console[level] = function (origin) {
        return function (...args: any[]) {
            if (disabled) return
            if (_filterString(option, args)) return
            origin.call(console, ...args)
        }
    }(console[level])
}

/**多级别日志输出 */
function _envLog(option: AllLogOption): void {
    const { disabledAll } = option || {}
    console = function (origin) {
        return {
            ...origin,
            log: function (...args: any[]): void {
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.log.call(console, ...args)
            },
            info: function (...args: any[]): void {
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.info.call(console, ...args)
            },
            debug: function (...args: any[]): void {
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.debug.call(console, ...args)
            },
            warn: function (...args: any[]): void {
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.warn.call(console, ...args)
            },
            error: function (...args: any[]): void {
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.error.call(console, ...args)
            }
        };
    }(console);
}

/**默认导出对象 */
export const log = {
    disabledAll: () => _envLog({ disabledAll: true }),
    disabled: (levels: LevelType[]) => {
        for (let i = 0; i < levels.length; i++) {
            const level: LevelType = levels[i];
            _log({ level, disabled: true })
        }
    },
    disabledAllBy: (option: ConsoleOption) => _envLog(option),
    disabledBy: (levels: LevelType[], option: ConsoleOption) => {
        for (let i = 0; i < levels.length; i++) {
            const level: LevelType = levels[i];
            _log({ level, ...option })
        }
    }
}