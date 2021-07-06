const { Complex } = require("../lib/index");

describe("Complex", () => {
  it("targetConversionIntoList", () => {
    const target = {
      name: "张三",
      age: 18,
      hight: 180,
    };
    const list = Complex.targetConversionIntoList(target, {
      name: "姓名",
      age: "年龄",
      hight: "身高",
    });
    const arr = [
      { label: "姓名", value: "张三" },
      { label: "年龄", value: 18 },
      { label: "身高", value: 180 },
    ];
    expect(list).toEqual(arr);
  });

  it("targetConversionIntoList 2", () => {
    const target = {
      name: "张三",
      age: 18,
      hight: 180,
    };
    const list = Complex.targetConversionIntoList(
      target,
      {
        name: "姓名",
        age: "年龄",
        hight: "身高",
      },
      { label: "target", value: "key" }
    );
    const arr = [
      { target: "姓名", key: "张三" },
      { target: "年龄", key: 18 },
      { target: "身高", key: 180 },
    ];
    expect(list).toEqual(arr);
  });

  it("targetConversionIntoList 3", () => {
    const target = {
      name: "张三",
      age: 18,
      hight: 180,
    };
    const list = Complex.targetConversionIntoList(target, {
      name: "姓名",
      age: "年龄",
    });
    const arr = [
      { label: "姓名", value: "张三" },
      { label: "年龄", value: 18 },
    ];
    expect(list).toEqual(arr);
  });

  it("targetConversionIntoList 4", () => {
    const target = {
      name: "张三",
      age: 18,
      hight: 180,
    };
    const list = Complex.targetConversionIntoList(target, {
      name: "姓名",
      age: {
        label: "年龄",
        formatter: () => "保密",
      },
    });
    const arr = [
      { label: "姓名", value: "张三" },
      { label: "年龄", value: "保密" },
    ];
    expect(list).toEqual(arr);
  });
});
