
const { sleep, sleepSync } = require('../lib')


describe("sleep", () => {
    it("测试 同步 延时", async () => {
        const _start = Date.now();
        await sleepSync(1000);
        const _calc = Date.now() - _start;
        expect(parseInt(_calc / 1000)).toBe(1);
    });
    it("测试 异步 延时", (done) => {
        const _start = Date.now();
        sleep(1000, () => {
            const _calc = Date.now() - _start;
            expect(parseInt(_calc / 1000)).toBe(1);
            done();
        });
    });
});