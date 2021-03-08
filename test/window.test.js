const { getGlobal, setGlobal, globalStore, removeGlobalItem } = require('../lib');

describe('window', () => {

    it('global', () => {
        const keyObj = 'key'
        const bool = setGlobal(keyObj, { value: 'hehe' })
        expect(bool).toBe(true)
        const getObj = getGlobal(keyObj)
        expect(getObj.value).toBe('hehe')

        const rmBool = removeGlobalItem(keyObj)
        expect(rmBool).toBe(true)
        const hasObj = getGlobal(keyObj)
        expect(hasObj).toBeUndefined()
    })

})