import { env } from "../lib";

describe("Env", () => {
    const { isAndroid, isIos } = env;
    
    it('isAndroid', () => {
        expect(isAndroid).toBe(false)
    })
    it('isIos', () => {
        expect(isIos).toBe(false)
    })
})