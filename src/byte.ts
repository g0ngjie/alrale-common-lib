
/**进位 */
function _carryBit(t: number, index: number): number {
    return t * (1024 ** (index - 1)) * 8
}
/**降位 */
function _dropBit(t: number, index: number): number {
    return t / (1024 ** (index - 1)) / 8
}

function _up(t: number, index: number): number {
    // return t >> (index * 10)
    return t / (1024 ** index)
}
function _down(t: number, index: number): number {
    // return t << (index * 10)
    return t * (1024 ** index)
}

/**
 * 字节转换
 * @param {number} b byte
 */
export function format(target: number) {
    return {
        Bit: {
            to: {
                Byte: () => _dropBit(target, 1),
                KB: () => _dropBit(target, 2),
                MB: () => _dropBit(target, 3),
                GB: () => _dropBit(target, 4),
                TB: () => _dropBit(target, 5),
            }
        },
        Byte: {
            to: {
                Bit: () => _carryBit(target, 1),
                KB: () => _up(target, 1),
                MB: () => _up(target, 2),
                GB: () => _up(target, 3),
                TB: () => _up(target, 4),
            }
        },
        KB: {
            to: {
                Bit: () => _carryBit(target, 2),
                Byte: () => _down(target, 1),
                MB: () => _up(target, 1),
                GB: () => _up(target, 2),
                TB: () => _up(target, 3),
            }
        },
        MB: {
            to: {
                Bit: () => _carryBit(target, 3),
                Byte: () => _down(target, 2),
                KB: () => _down(target, 1),
                GB: () => _up(target, 1),
                TB: () => _up(target, 2),
            }
        },
        GB: {
            to: {
                Bit: () => _carryBit(target, 4),
                Byte: () => _down(target, 3),
                KB: () => _down(target, 2),
                MB: () => _down(target, 1),
                TB: () => _up(target, 1),
            }
        },
        TB: {
            to: {
                Bit: () => _carryBit(target, 5),
                Byte: () => _down(target, 4),
                KB: () => _down(target, 3),
                MB: () => _down(target, 2),
                GB: () => _down(target, 1),
            }
        },
    }
}
