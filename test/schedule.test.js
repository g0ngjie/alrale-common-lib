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
    it("autoStopInterval", async (done) => {
        let count = 0;
        await Schedule.autoStopInterval(500, 1000, () => (count += 1));
        expect(count).toBeGreaterThan(1);
        expect(count).toBe(2);
        done();
    });
});