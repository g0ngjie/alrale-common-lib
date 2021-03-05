
/**进位 */
function carryBit(t: number, index: number): number {
    // return t >> (index * 10)
    return t / (1024 ** index)
}
/**降位 */
function dropBit(t: number, index: number): number {
    // return t << (index * 10)
    return t * (1024 ** index)
}

/**
 * 字节转换
 * @param {number} b byte
 */
export function format(target: number) {
    return {
        Byte: {
            to: {
                KB: () => carryBit(target, 1),
                MB: () => carryBit(target, 2),
                GB: () => carryBit(target, 3),
                TB: () => carryBit(target, 4),
            }
        },
        KB: {
            to: {
                Byte: () => dropBit(target, 1),
                MB: () => carryBit(target, 1),
                GB: () => carryBit(target, 2),
                TB: () => carryBit(target, 3),
            }
        },
        MB: {
            to: {
                Byte: () => dropBit(target, 2),
                KB: () => dropBit(target, 1),
                GB: () => carryBit(target, 1),
                TB: () => carryBit(target, 2),
            }
        },
        GB: {
            to: {
                Byte: () => dropBit(target, 3),
                KB: () => dropBit(target, 2),
                MB: () => dropBit(target, 1),
                TB: () => carryBit(target, 1),
            }
        },
        TB: {
            to: {
                Byte: () => dropBit(target, 4),
                KB: () => dropBit(target, 3),
                MB: () => dropBit(target, 2),
                GB: () => dropBit(target, 1),
            }
        },
    }
}
