import { Env } from "../lib";

describe("Env", () => {
    const { isAndroid, isIos } = Env;
    
    it('isAndroid', () => {
        expect(isAndroid).toBe(false)
    })
    it('isIos', () => {
        expect(isIos).toBe(false)
    })
})