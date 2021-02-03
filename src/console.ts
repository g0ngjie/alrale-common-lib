import { typeIs } from "./type.is";

type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';

interface ConsoleOption {
    startWitch?: string,
    endWitch?: string,
    includes?: string,
}

interface AllLogOption extends ConsoleOption {
    disabledAll?: boolean,
}
interface LogOption extends ConsoleOption {
    disabled?: boolean,
    level: LevelType
}

function _log(option: LogOption): void {
    const { level, disabled, startWitch, endWitch, includes } = option || {}
    console[level] = function (origin) {
        return function (...args: any[]) {
            if (disabled) return
            if (_filterString(option, args)) return
            origin.call(console, ...args)
        }
    }(console[level])
}

function _hasArrayData(list: any[]): boolean {
    if (typeIs(list) !== 'array') return false
    return list.length > 0
}
function _hasStartWitch(startStr: string, args: any[]): boolean {
    if (!_hasArrayData(args)) return false
    const zero: any = args[0]
    if (typeIs(zero) !== 'string') return false
    return zero.startsWith(startStr)
}

function _hasEndWitch(endStr: string, args: any[]): boolean {
    if (!_hasArrayData(args)) return false
    const ending: any = args[args.length - 1]
    if (typeIs(ending) !== 'string') return false
    return endStr.endsWith(endStr)
}

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

function _filterString(option: ConsoleOption, args: any[]): boolean {
    const { startWitch, endWitch, includes } = option || {}
    // 如果包含 则不输出
    if (startWitch && _hasStartWitch(startWitch, args)) return true
    if (endWitch && _hasEndWitch(endWitch, args)) return true
    if (includes && _hasIncludes(includes, args)) return true
    return false
}

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