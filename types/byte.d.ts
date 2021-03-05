interface IOptions {
    Bit: {
        toByte(): number;
        toKB(): number;
        toMB(): number;
        toGB(): number;
        toTB(): number;
    };
    Byte: {
        toBit(): number;
        toKB(): number;
        toMB(): number;
        toGB(): number;
        toTB(): number;
    };
    KB: {
        toBit(): number;
        toByte(): number;
        toMB(): number;
        toGB(): number;
        toTB(): number;
    };
    MB: {
        toBit(): number;
        toByte(): number;
        toKB(): number;
        toGB(): number;
        toTB(): number;
    };
    GB: {
        toBit(): number;
        toByte(): number;
        toKB(): number;
        toMB(): number;
        toTB(): number;
    };
    TB: {
        toBit(): number;
        toByte(): number;
        toKB(): number;
        toMB(): number;
        toGB(): number;
    };
}
/**
 * 字节转换
 * @param {number} b byte
 */
export declare function format(target: number): IOptions;
export {};
