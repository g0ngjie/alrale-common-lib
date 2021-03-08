const { byte } = require('../lib/index');

describe("byte", () => {

    it("字节格式转化", () => {
        // 1024b
        const b = 1024
        const b2kb = byte.format(b).Byte.toKB()
        expect(b2kb).toBe(1)
        // 5kb
        const kb = 5;
        const kb2m = byte.format(kb).KB.toMB()
        expect(kb2m).toBe(5 / 1024)
        // 10M
        const m = 10;
        const m2gb = byte.format(m).MB.toGB()
        expect(m2gb).toBe(10 / 1024)
        // 1Gb
        const gb = 1;
        const gb2m = byte.format(gb).GB.toMB()
        expect(gb2m).toBe(1 * 1024)
        // 1231
        const _b2 = 1231
        const _b22mb = byte.format(_b2).Byte.toMB()
        expect(_b22mb).toBe(0.0011739730834960938)
        // 1232 bit
        const _bit1 = 1232
        const _bit12kb = byte.format(_bit1).Bit.toKB()
        expect(_bit12kb).toBe(0.150390625)
        // 1232.1 MB
        const _mb1 = 1232.1
        const _mb12bit = byte.format(_mb1).MB.toBit()
        expect(_mb12bit).toBe(10335603916.8)
    })
})