import { log } from "../lib/console";

describe('console', () => {

    it.skip("disabled log", () => {
        log.disabled(['log'])
        console.log('---这个信息不会输出---')
        console.info('---这个信息会输出---')
    })

    it.skip("disabledAll", () => {
        log.disabledAll()
        console.log('---这个信息不会输出----');
    })

    it.skip("disabledAllBy", () => {
        log.disabledAllBy({ startWitch: '[d' })
        console.log('hehe123')
        console.log('hehe', { a: 1 })
        console.log('[debug]123-> ', 123);
    })

    it.skip("disabledBy", () => {
        log.disabledBy(['log'], { endWitch: 'hehe' })
        console.log('[debug]333-> ', 333);
        console.log('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("disabledBy include", () => {
        log.disabledBy(['log'], { include: 'hehe' })
        console.log('[debug]333-> ', 333);
        console.log('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("disabledBy includes [***]", () => {
        log.disabledBy(['log', 'info'], { includes: ['hehe', '[de'] })
        console.log('[debug]333-> ', 333);
        console.info('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("disabledAllBy startWitchs [***]", () => {
        log.disabledAllBy({ startWitchs: ['hehe', '[de'], include: 'hehe' })
        console.log('[debug]333-> ', 333);
        console.info('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("collect 收集", () => {
        log.collect('log', {
            prefix: '1', callback: (args) => {
                console.log('------>', args)
            }
        })
        console.log('[debug]123-> ', 123);
        console.log('1这个是', { a: 1 }, '测试')
    })

    it.skip("collectAll 收集", () => {
        log.collectAll({
            prefix: '1', callback: (args) => {
                console.info('----->', args);
            }
        })
        console.log('[debug]123-> ', 123);
        console.log('1这个是', { a: 1 }, '测试')
    })
})