# @alizeait/flatto ![Check](https://github.com/alizeait/flatto/workflows/Check/badge.svg) ![Coverage](https://img.shields.io/codecov/c/github/alizeait/flatto)

> A tiny (~200B) and [super fast](#benchmarks) nested object flattener.

Takes a nested object/array and returns a flattened object, e.i. an object with a single nested level.

It seperates the keys with a `.` by default but this can be changed to anything with the seperator option.

## Installation

```cmd
$ npm install @alizeait/flatto
```

## Usage

```js
import { flatto } from "@alizeait/flatto";

const flattened = flatto({
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
});

/*
{
  "key1.keyA": "valueI",
  "key2.keyB": "valueII",
  "key3.a.b.c": 2,
  "key4": [],
  "key5.a.0": "value1",
  "key5.a.1": "value2",
  "key5.a.2.key1.keyA": "valueI",
  "key5.a.2.key1.keyB.0": 1,
  "key5.a.2.key1.keyB.1": 2,
  "key5.a.2.key1.keyB.2": 3,
  "key5.a.2.key1.keyB.3": 4,
  "key5.b": null,
  "key5.c": undefined,
  "key6": {}
}
  */

const flattoCustom = flatto(
  {
    key1: {
      keyA: "valueI",
    },
    key2: {
      keyB: "valueII",
    },
    key3: { a: { b: { c: 2 } } },
  },
  "-"
);

/*
{
  "key1-keyA": "valueI",
  "key2-keyB": "valueII",
  "key3-a-b-c": 2,
}
*/
```

## Benchmarks

```
Benchmarks:
  flat                         x 139,061 ops/sec ±0.70% (90 runs sampled)
  objnest                      x 52,776 ops/sec ±0.48% (90 runs sampled)
  @alizeait/flatto             x 335,535 ops/sec ±0.45% (94 runs sampled)
  flatify-obj                  x 103,834 ops/sec ±0.78% (93 runs sampled)
```

> Running on Node.js v12.13.0, 64-bit OS, Intel(R) Core(TM) i5-6600K CPU @ 3.50GHz, 16.0 GB RAM

## API

### flatto(input: Object | Array, seperator?:string)

Returns: `Object`

Returns a new flattened object that is only one level deep.

If the input is not an object or an array, the input itself is returned instead of an object.
