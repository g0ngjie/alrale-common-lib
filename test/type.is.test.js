const {
    typeIs,
    isNumberExt,
    isBoolean,
    isSymbol,
    isUndefined,
    isNull,
    isFunction,
    isDate,
    isArray,
    isObject,
    isMap,
    isSet,
    isRegExp,
    isError
} = require('../lib');

describe("查看类型", () => {
    test("arr", () => {
        const arr = typeIs([]);
        const arr_2 = typeIs(new Array());
        expect(arr).toBe("array");
        expect(arr_2).toBe("array");
    });

    test("object", () => {
        const obj = typeIs({ foo: null });
        const obj_2 = typeIs(new Object());
        expect(obj).toBe("object");
        expect(obj_2).toBe("object");
    });

    test("string", () => {
        const str = typeIs("string");
        expect(str).toBe("string");
    });

    test("function", () => {
        const func = typeIs(() => { });
        const func_2 = typeIs(new Function());
        expect(func).toBe("function");
        expect(func_2).toBe("function");
    });

    it("isNumberExt", () => {
        const one = isNumberExt('one')
        expect(one).toBe(false)

        const two = isNumberExt('2')
        expect(two).toBe(false)

        const func = isNumberExt(() => { })
        expect(func).toBe(false)

        const three = isNumberExt(1.23)
        expect(three).toBe(true)

        const four = isNumberExt(123)
        expect(four).toBe(true)
    })

    it("others type", () => {
        expect(isBoolean(1)).toBe(false)
        expect(isBoolean(false)).toBe(true)

        expect(isSymbol(Symbol(1))).toBe(true)

        expect(isUndefined(undefined)).toBe(true)
        expect(isUndefined('undefined')).toBe(false)

        expect(isNull(null)).toBe(true)
        expect(isNull(undefined)).toBe(false)

        expect(isFunction(() => { })).toBe(true)
        expect(isFunction(new Function())).toBe(true)

        expect(isDate(new Date())).toBe(true)
        expect(isDate(Date.now())).toBe(false)
        expect(isDate(1631686473983)).toBe(false)

        expect(isArray([])).toBe(true)
        expect(isArray(new Array())).toBe(true)
        expect(isArray({})).toBe(false)

        expect(isObject(new Map())).toBe(false)
        expect(isObject(new Array())).toBe(false)
        expect(isObject({})).toBe(true)
        expect(isObject(new Object())).toBe(true)
        expect(isObject(Object.create({}))).toBe(true)

        expect(isMap(new Map())).toBe(true)
        expect(isMap({})).toBe(false)

        expect(isSet(new Map())).toBe(false)
        expect(isSet(new Set())).toBe(true)

        expect(isRegExp(/^-?\d+$/)).toBe(true)
        expect(isRegExp(new RegExp())).toBe(true)

        expect(isError(new Error())).toBe(true)
        expect(isError(new TypeError())).toBe(true)

    })
});