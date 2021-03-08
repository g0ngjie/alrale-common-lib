const { uniqueId } = require("../lib/string");

describe('uniqueId', () => {
    it('1w次随机，不重复', () => {
        let count = 10000;
        const cache = {}
        const repetition = []
        while (count) {
            const unId = uniqueId()
            if (cache[unId]) repetition.push(unId)
            cache[unId] = true
            count--
        }
        expect(repetition).toEqual([])
    })
})