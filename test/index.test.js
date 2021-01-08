import { queryToString } from "../lib/query.to.string";
import { getSync } from "../lib/request";
import { sleepSync } from "../lib/sleep";
import {
  deepClone,
  deepOClone,
  parseQuery,
  decodeUrlSearch,
  typeIs,
  toSimplifiedChinese,
  setStore,
  getStore,
  setOStore,
  getOStore,
  sleep,
  dateDiff,
  week,
  get,
  Schedule,
} from "./../lib";

describe("深复制", () => {
  test("string -> json -> string", () => {
    const foo = { a: 1, b: 2 };
    const foo_copy = deepClone(foo);
    expect(foo_copy === foo).toBe(false);
  });

  test("json -> deep clone -> other json", () => {
    const foo = [{ a: 1, b: 2 }];
    const foo_copy = deepOClone(foo);
    expect(foo_copy === foo).toBe(false);
  });
});

describe("url", () => {
  test("url解析参数", () => {
    const url =
      "https://www.gaodeditu.com?areaName=%E5%8C%97%E4%BA%AC&xml=test";
    const params = parseQuery(url);
    expect(params).toEqual({ areaName: "北京", xml: "test" });
  });

  test("get请求params转换", () => {
    const params = queryToString({ a: 1, b: "foo", c: "汉" });
    expect(params).toBe("?a=1&b=foo&c=%E6%B1%89");
  });

  test("decodeUrl", () => {
    const search = "?areaName=%E5%8C%97%E4%BA%AC&xml=test=";
    const params = decodeUrlSearch(search);
    expect(params).toEqual({ areaName: "北京", xml: "test=" });
  });
});

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
    const func = typeIs(() => {});
    const func_2 = typeIs(new Function());
    expect(func).toBe("function");
    expect(func_2).toBe("function");
  });
});

describe("数字转汉字", () => {
  test("数字转汉字", () => {
    const han = toSimplifiedChinese(12345);
    expect(han).toBe("一万二千三百四十五");
  });

  test("周", () => {
    const day = week(7);
    expect(day).toBe("周日");
  });
});

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

describe("sleep", () => {
  it("测试 同步 延时", async () => {
    const _start = Date.now();
    await sleepSync(1000);
    const _calc = Date.now() - _start;
    expect(parseInt(_calc / 1000)).toBe(1);
  });
  it("测试 异步 延时", (done) => {
    const _start = Date.now();
    sleep(1000, () => {
      const _calc = Date.now() - _start;
      expect(parseInt(_calc / 1000)).toBe(1);
      done();
    });
  });
});

describe("时间轴", () => {
  test.skip("一天前", () => {
    const diff = dateDiff(1605168177);
    expect(diff).toBe("1天前");
  });
  test("刚刚", () => {
    const diff = dateDiff(Date.now());
    expect(diff).toBe("刚刚");
  });
});

describe("定时", () => {
  it("execInterval", (done) => {
    let count = 0;
    const clearInterval = Schedule.execInterval(500, () => (count += 1));
    setTimeout(() => {
      expect(count).toBeGreaterThan(1);
      expect(count).toBe(2);
      clearInterval();
      done();
    }, 1100);
  });
  it("autoStopInterval", async (done) => {
    let count = 0;
    await Schedule.autoStopInterval(500, 1000, () => (count += 1));
    expect(count).toBeGreaterThan(1);
    expect(count).toBe(2);
    done();
  });
});

describe.skip("ajax", () => {
  test("get", (done) => {
    get("http://localhost:3000/json", {}, function (data) {
      expect(data).toEqual({ title: "koa2 json" });
      done();
    });
  });

  test("get sync", async () => {
    const data = await getSync("http://localhost:3000/json");
    expect(data).toEqual({ title: "koa2 json" });
  });
});
