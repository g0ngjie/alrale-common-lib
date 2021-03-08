const {
    setStore,
    getStore,
    setOStore,
    getOStore,
} = require('../lib')

describe("store", () => {
    test("session", () => {
        const s_key = "session_key";
        setStore(s_key, "test session");
        const s_val = getStore(s_key);
        expect(s_val).toBe("test session");
    });

    test("local", () => {
        const l_key = "local_key";
        setStore(l_key, "test local", "local");
        const l_val = getStore(l_key, "local");
        expect(l_val).toBe("test local");
    });

    test("object session", () => {
        const o_s_key = "o_s_key";
        setOStore(o_s_key, { foo: 123 });
        const o_s_val = getOStore(o_s_key);
        expect(o_s_val.foo).toBe(123);
    });

    test("object local", () => {
        const o_l_key = "o_l_key";
        setOStore(o_l_key, { foo: 456 }, "local");
        const o_l_val = getOStore(o_l_key, "local");
        expect(o_l_val.foo).toBe(456);
    });

    test("boolean -> string", () => {
        const b_s_key = "b_s_key";
        setStore(b_s_key, true);
        const bool = getStore(b_s_key);
        expect(typeof bool).toBe("string");
    });

    test("boolean -> boolean", () => {
        const o_b_s_key = "o_b_s_key";
        setOStore(o_b_s_key, true);
        const o_bool = getOStore(o_b_s_key);
        expect(typeof o_bool).toBe("boolean");
    });
});