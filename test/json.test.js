const { parseJSON, parseJsonDeep } = require('../lib');

describe("json", () => {

    it('parseJSON & parseJsonDeep', () => {
        const longStr = '{"errorCode":100,"errorMsg":null,"data":[{"cityCode":"110100","cityName":"北京市","mallAreaList":[{"areaCode":"110101","areaName":"东城区"},{"areaCode":"110102","areaName":"西城区"},{"areaCode":"110105","areaName":"朝阳区"},{"areaCode":"110106","areaName":"丰台区"},{"areaCode":"110107","areaName":"石景山区"},{"areaCode":"110108","areaName":"海淀区"},{"areaCode":"110109","areaName":"门头沟区"},{"areaCode":"110111","areaName":"房山区"},{"areaCode":"110112","areaName":"通州区"},{"areaCode":"110113","areaName":"顺义区"},{"areaCode":"110114","areaName":"昌平区"},{"areaCode":"110115","areaName":"大兴区"},{"areaCode":"110116","areaName":"怀柔区"},{"areaCode":"110117","areaName":"平谷区"}]},{"cityCode":"110200","cityName":"北京市辖县","mallAreaList":[{"areaCode":"110228","areaName":"密云县"},{"areaCode":"110229","areaName":"延庆县"}]}]}'
        const _json = parseJSON(longStr)
        expect(_json.errorCode).toBe(100)
        // 需要深度数据
        const needDeep = _json.data?.map(item => {
            return JSON.stringify(item)
        })

        const deepJSONs = parseJsonDeep(needDeep)
        expect(deepJSONs[0].mallAreaList[0].areaName).toBe('东城区')
    })

    it("parseJsonDeep object", () => {
        const mockData = {
            one: JSON.stringify({
                two: JSON.stringify({
                    three: JSON.stringify({
                        four: JSON.stringify({
                            time: '08:20'
                        })
                    })
                })
            })
        }
        const json = parseJsonDeep(JSON.stringify(mockData))
        expect(json.one.two.three.four.time).toBe('08:20')
        const json2 = parseJsonDeep(mockData)
        expect(typeof json2.one.two).toBe('object')
    })

    it("parseJsonDeep array", () => {
        const mockList = [
            JSON.stringify([
                JSON.stringify([
                    JSON.stringify([
                        '08:20'
                    ])
                ])
            ])
        ]
        const arr = parseJsonDeep(JSON.stringify(mockList))
        expect(arr[0][0][0][0]).toBe('08:20')
        const arr2 = parseJsonDeep(mockList)
        expect(typeof arr2[0][0]).toBe('object')
    })

    it("parseJsonDeep complex", () => {
        const mockData = {
            one: JSON.stringify({
                two: JSON.stringify({
                    three: JSON.stringify({
                        four: JSON.stringify({
                            time: '08:20'
                        })
                    })
                })
            }),
            two: JSON.stringify({
                two: {
                    three: {
                        four: JSON.stringify({
                            year: '2021'
                        })
                    }
                }
            })
        }
        const json = parseJsonDeep(JSON.stringify(mockData))
        expect(json.one.two.three.four.time).toBe('08:20')
        const json2 = parseJsonDeep(mockData)
        // JSON.parse("2021") => 2021
        expect(json2.two.two.three.four.year).toBe(2021)
    })

})

