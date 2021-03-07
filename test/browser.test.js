import {
    getKernel,
    isChrome,
    isEdge,
    isFirefox,
    isIE,
    isOpera,
    isSafari
} from "../lib";

describe("Browser", () => {
    it('getKernel', () => {
        const kernel = getKernel()
        expect(kernel).toBe('None')
    })
    it('is', () => {
        expect(isChrome).toBe(false)
        expect(isEdge).toBe(false)
        expect(isFirefox).toBe(false)
        expect(isIE).toBe(false)
        expect(isOpera).toBe(false)
        expect(isSafari).toBe(false)
    })
})