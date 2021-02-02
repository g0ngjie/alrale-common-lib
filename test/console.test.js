import { log } from "../lib/console";

describe('console', () => {

    it("disabled log", () => {
        log.disabled(['log'])
        console.log('---这个信息不会输出---')
        console.info('---这个信息会输出---')
    })

    it("disabledAll", () => {
        log.disabledAll()
        console.log('---这个信息不会输出----');
    })

})