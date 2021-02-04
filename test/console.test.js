import { log } from "../lib/console";

describe('console', () => {

    it.skip("skip log", () => {
        log.skip(['log'])
        console.log('---这个信息不会输出---')
        console.info('---这个信息会输出---')
    })

    it.skip("skipAll", () => {
        log.skipAll()
        console.log('---这个信息不会输出----');
    })

    it.skip("skipAllBy", () => {
        log.skipAllBy({ startWitch: '[d' })
        console.log('这个信息会输出1')
        console.log('这个信息会输出2', { a: 1 })
        console.log('[debug]这个信息不输出-> ', 123);
    })

    it.skip("skipBy", () => {
        log.skipBy(['log'], { endWitch: 'hehe' })
        console.log('[debug]这个会log1-> ', 333);
        console.log('这个信息不会输出hehe')
        console.log('[debug]这个会log2-> ', 123);
    })

    it.skip("skipBy include", () => {
        log.skipBy(['log'], { include: 'hehe' })
        console.log('[debug]这个会log1-> ', 333);
        console.log('这个信息不会输出123hehe这个信息不会输出')
        console.log('[debug]这个会log2-> ', 123);
    })

    it.skip("skipBy includes [***]", () => {
        log.skipBy(['log', 'info'], { includes: ['hehe', '[de'] })
        console.log('[debug]333-> ', 333);
        console.info('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("skipAllBy startWitchs [***]", () => {
        log.skipAllBy({ startWitchs: ['hehe', '[de'], include: 'hehe' })
        console.log('[debug]333-> ', 333);
        console.info('123hehe')
        console.log('[debug]123-> ', 123);
    })

    it.skip("collect 收集", () => {
        log.collect('log', {
            prefix: '1', callback: (args) => {
                console.info('收集------>', args)
            }
        })
        console.log('[debug]不会被收集-> ', 123);
        console.log('1这个会被收集', { a: 1 }, '测试')
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

    it.skip("onlyAll", () => {
        log.onlyAll({ startWitch: '[debug]' })
        console.log('[debug]这个会输出-> ', 123);
        console.log('这个不会输出')
        console.info('[debug]这个也会输出-> ', true);
    })

    it.skip("only", () => {
        log.only('info', { startWitch: '[debug]' })
        console.info(123)
        console.info('[debug]这个会输出-> ', 123);
        console.info('测试测试')
        console.log('这个也输出')
    })
})