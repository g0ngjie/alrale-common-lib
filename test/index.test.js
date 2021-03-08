const {
  deepClone,
  deepOClone,
  parseQuery,
  decodeUrlSearch,
  typeIs,
  toSimplifiedChinese,
  dateDiff,
  week,
  queryToString,
} = require('../lib');

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
    const func = typeIs(() => { });
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

