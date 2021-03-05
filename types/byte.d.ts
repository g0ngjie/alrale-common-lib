/**
 * 字节转换
 * @param {number} b byte
 */
export declare function format(target: number): {
    Bit: {
        to: {
            Byte: () => number;
            KB: () => number;
            MB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    Byte: {
        to: {
            Bit: () => number;
            KB: () => number;
            MB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    KB: {
        to: {
            Bit: () => number;
            Byte: () => number;
            MB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    MB: {
        to: {
            Bit: () => number;
            Byte: () => number;
            KB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    GB: {
        to: {
            Bit: () => number;
            Byte: () => number;
            KB: () => number;
            MB: () => number;
            TB: () => number;
        };
    };
    TB: {
        to: {
            Bit: () => number;
            Byte: () => number;
            KB: () => number;
            MB: () => number;
            GB: () => number;
        };
    };
};
