/**
 * 字节转换
 * @param {number} b byte
 */
export declare function format(target: number): {
    Byte: {
        to: {
            KB: () => number;
            MB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    KB: {
        to: {
            Byte: () => number;
            MB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    MB: {
        to: {
            Byte: () => number;
            KB: () => number;
            GB: () => number;
            TB: () => number;
        };
    };
    GB: {
        to: {
            Byte: () => number;
            KB: () => number;
            MB: () => number;
            TB: () => number;
        };
    };
    TB: {
        to: {
            Byte: () => number;
            KB: () => number;
            MB: () => number;
            GB: () => number;
        };
    };
};
