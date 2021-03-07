import { typeIs } from "./type.is";

type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';

interface Output {
    /**起始-关键词 */
    prefix: string,
    /**回调 */
    callback: (...args: any) => any,
}

interface Option {
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

interface OnlyOption extends Option {
    /**是否开启只查看[prefix]功能 */
    only?: boolean,
}

interface ConsoleOption extends Option {
    /**输出结果集回调 */
    output?: Output,
}

interface AllLogOption extends ConsoleOption, OnlyOption {
    disabledAll?: boolean,
}

interface LogOption extends ConsoleOption, OnlyOption {
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
    return ending.endsWith(endStr)
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

/**日志输出回调 */
function _outputFunc(option: Output, ...args: any[]): void {
    if (!option) return
    const { prefix, callback } = option
    if (prefix && _filterString({ startWitch: prefix }, args)) callback(...args)
}

/**单级别日志输出 */
function _log(option: LogOption): void {
    const { level, disabled, output, only } = option || {}
    console[level] = function (origin) {
        return function (...args: any[]) {
            // 只读
            if (only) {
                // 如果包含则输出
                if (_filterString(option, args)) origin.call(console, ...args)
                return
            }
            // 日志收集
            if (output) _outputFunc(output, ...args)
            // 禁用
            if (disabled) return
            // 过滤条件|禁用
            if (_filterString(option, args)) return
            // 日志打印
            origin.call(console, ...args)
        }
    }(console[level])
}

/**多级别日志输出 */
function _envLog(option: AllLogOption): void {
    const { disabledAll, output, only } = option || {}
    console = function (origin) {
        return {
            ...origin,
            log: function (...args: any[]): void {
                if (only) {// 只读
                    // 如果包含则输出
                    if (_filterString(option, args)) origin.log.call(console, ...args)
                    return
                }
                if (output) _outputFunc(output, ...args)
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.log.call(console, ...args)
            },
            info: function (...args: any[]): void {
                if (only) {// 只读
                    if (_filterString(option, args)) origin.info.call(console, ...args)
                    return
                }
                if (output) _outputFunc(output, ...args)
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.info.call(console, ...args)
            },
            debug: function (...args: any[]): void {
                if (only) {// 只读
                    if (_filterString(option, args)) origin.debug.call(console, ...args)
                    return
                }
                if (output) _outputFunc(output, ...args)
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.debug.call(console, ...args)
            },
            warn: function (...args: any[]): void {
                if (only) {// 只读
                    if (_filterString(option, args)) origin.warn.call(console, ...args)
                    return
                }
                if (output) _outputFunc(output, ...args)
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.warn.call(console, ...args)
            },
            error: function (...args: any[]): void {
                if (only) {// 只读
                    if (_filterString(option, args)) origin.error.call(console, ...args)
                    return
                }
                if (output) _outputFunc(output, ...args)
                if (disabledAll) return
                if (_filterString(option, args)) return
                origin.error.call(console, ...args)
            }
        };
    }(console);
}

/**默认导出对象 */
export const log = {
    /**全部禁用 */
    skipAll: (): void => _envLog({ disabledAll: true }),
    /**level级别禁用 */
    skip: (levels: LevelType[]): void => {
        for (let i = 0; i < levels.length; i++) {
            const level: LevelType = levels[i];
            _log({ level, disabled: true })
        }
    },
    /**条件禁用 */
    skipAllBy: (option: Option): void => _envLog(option),
    /**level级别禁用|条件过滤 */
    skipBy: (levels: LevelType[], option: Option): void => {
        for (let i = 0; i < levels.length; i++) {
            const level: LevelType = levels[i];
            _log({ level, ...option })
        }
    },
    /**收集 */
    collectAll: (option: Output): void => {
        const consoleOption: ConsoleOption = {};
        consoleOption.output = option
        _envLog(consoleOption)
    },
    /**level级别收集|条件过滤 */
    collect: (level: LevelType, option: Output): void => {
        const consoleOption: ConsoleOption = {};
        consoleOption.output = option
        _log({ level, ...consoleOption })
    },
    /**只展示[prefix]相关 */
    onlyAll: (option: Option): void => _envLog({ only: true, ...option }),
    /**level级别只展示[prefix]相关 */
    only: (level: LevelType, option: Option): void => _log({ level, only: true, ...option })
}