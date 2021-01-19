const { Suite } = require("benchmark");
const mock = require("../mock");
const moduleNames = {
  flat: require("flat"),
  objnest: require("objnest").flatten,
  "@alizeait/flatto": require("../dist").flatto,
  "flatify-obj": require("flatify-obj"),
};
console.log("Benchmarks:");
const bench = new Suite().on("cycle", (e) => {
  console.log("  " + e.target);
});

Object.keys(moduleNames).forEach((moduleName) => {
  bench.add(moduleName + " ".repeat(28 - moduleName.length), () => {
    moduleNames[moduleName](mock);
  });
});

bench.run();
