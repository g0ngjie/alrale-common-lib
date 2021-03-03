const { get } = require('../lib/request')

describe("Fetch", () => {
    it("get", async () => {
        const res = await get("www.baidu.com");
        // node环境不支持fetch
        expect(res).toBe('node环境不支持')
    });
});