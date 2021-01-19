const mock = {
  key1: {
    keyA: "valueI",
  },
  key2: {
    keyB: "valueII",
  },
  key3: { a: { b: { c: 2 } } },
  key4: [],
  key5: {
    a: [
      "value1",
      "value2",
      {
        key1: {
          keyA: "valueI",
          keyB: [1, 2, 3, 4],
        },
      },
    ],
    b: null,
    c: undefined,
  },
  key6: {},
};
module.exports = mock;
