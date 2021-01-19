const mock = require("../mock");
const { flatto } = require("../src");

describe("flatto", () => {
  test("should flatten correctly", () => {
    expect(flatto(mock)).toMatchSnapshot();
  });
  test("should add custom seperator", () => {
    const data = {
      key1: { a: 2 },
      key2: { b: 3 },
    };
    expect(flatto(data, "-")).toEqual({ "key1-a": 2, "key2-b": 3 });
    expect(flatto(mock, "~")).toMatchSnapshot();
  });
  test("should keep an empty object or array", () => {
    const data = {
      key1: { a: [] },
      key2: { b: {} },
    };
    expect(flatto(data)).toEqual({ "key1.a": [], "key2.b": {} });
  });
  test("should keep falsy values", () => {
    const data = {
      key1: { a: false },
      key2: { b: null },
      key3: { c: 0 },
      key4: { d: { e: "" } },
      key5: { f: { g: undefined } },
      key6: { h: { i: NaN } },
    };
    expect(flatto(data)).toEqual({
      "key1.a": false,
      "key2.b": null,
      "key3.c": 0,
      "key4.d.e": "",
      "key5.f.g": undefined,
      "key6.h.i": NaN,
    });
  });
});
