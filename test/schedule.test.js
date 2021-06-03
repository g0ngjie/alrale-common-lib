const { Schedule } = require('../lib')

describe("定时", () => {
    it("execInterval", (done) => {
        let count = 0;
        const clearInterval = Schedule.execInterval(500, () => (count += 1));
        setTimeout(() => {
            expect(count).toBeGreaterThan(1);
            expect(count).toBe(2);
            clearInterval();
            done();
        }, 1100);
    });

    it("autoStopInterval", (done) => {
        let count = 0;
        setTimeout(() => {
            expect(count).toBe(2);
            done();
        }, 1100);
        Schedule.autoStopInterval(500, 1200, () => (count += 1));
    });

    it("autoStopInterval clearInterval function", async (done) => {
        let count = 0;
        let clearFunc = null;
        setTimeout(() => {
            clearFunc();
            expect(count).toBe(4)
            done()
        }, 2 * 1000 + 100);
        clearFunc = await Schedule.autoStopInterval(500, 4 * 1000 + 100, () => count += 1);
    });
});