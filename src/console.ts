
type LevelType = 'info' | 'log' | 'debug' | 'warn' | 'error';

interface LogOption {
    disabled?: boolean,
    level: LevelType
}

interface ConsoleOption {
    disabledAll?: boolean,
}

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
            ...origin,
            log: function (...args: any[]): void {
                if (disabledAll) return
                origin.log.call(console, ...args)
            },
            info: function (...args: any[]): void {
                if (disabledAll) return
                origin.info.call(console, ...args)
            },
            debug: function (...args: any[]): void {
                if (disabledAll) return
                origin.debug.call(console, ...args)
            },
            warn: function (...args: any[]): void {
                if (disabledAll) return
                origin.warn.call(console, ...args)
            },
            error: function (...args: any[]): void {
                if (disabledAll) return
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
    }
}