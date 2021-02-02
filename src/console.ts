import { typeIs } from "./type.is";


interface LogOption {
    disabled?: boolean,
    level: string | any
}

interface ConsoleOption {
    disabledAll?: boolean,
}

type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';

type DisabledLevel = LevelType | LevelType[];

let console: any;

function _log({ level, disabled }: LogOption): void {
    console[level] = function (origin) {
        return function (...args: any[]) {
            if (disabled) return
            origin.call(console, ...args)
        }
    }(console[level])
}

function _envLog(option: ConsoleOption): void {
    const { disabledAll } = option || {}
    console = function (origin) {
        return {
            log: function (...args: any[]) {
                if (disabledAll) return
                origin.log.call(console, ...args)
            },
            info: function (...args: any[]) {
                if (disabledAll) return
                origin.info.call(console, ...args)
            },
            debug: function (...args: any[]) {
                if (disabledAll) return
                origin.debug.call(console, ...args)
            },
            warn: function (...args: any[]) {
                if (disabledAll) return
                origin.warn.call(console, ...args)
            },
            error: function (...args: any[]) {
                if (disabledAll) return
                origin.error.call(console, ...args)
            }
        };
    }(console);
}

export const _console = {
    disabledAll: () => _envLog({ disabledAll: true }),
    disabled: (level: DisabledLevel) => {
        if (typeIs(level) === 'array') {
            for (let i = 0; i < level.length; i++) {
                const l: string = level[i];
                _log({ level: l, disabled: true })
            }
        } else {
            _log({ level, disabled: true })
        }
    }
}