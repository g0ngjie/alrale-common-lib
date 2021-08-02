const { color } = require('../lib');

describe("color", () => {
    it('100%', () => {
        const oneHundred = color.hexTransparency['100%']
        expect(oneHundred).toBe('FF')
    })

    it('50%', () => {
        const fifty = color.hexTransparency['50%']
        expect(fifty).toBe('80')
    })
})