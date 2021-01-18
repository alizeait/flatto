const { Suite } = require("benchmark");
const isUUID = require("is-uuid");
const moduleNames = {
  "uuid/v4": require("uuid").v4,
  "@alizeait/uuid": require("../dist/node").v4,
  nanoid: require("nanoid").nanoid,
};
console.log("Benchmarks:");
const bench = new Suite().on("cycle", (e) => {
  console.log("  " + e.target);
});

Object.keys(moduleNames).forEach((moduleName) => {
  bench.add(moduleName + " ".repeat(28 - moduleName.length), () => {
    moduleNames[moduleName]();
  });
});

bench.run();
console.log("\nRFC UUID v4 validation:");
Object.keys(moduleNames).forEach((moduleName) => {
  console.log(
    `  ${moduleName}${" ".repeat(28 - moduleName.length)}${
      isUUID.v4(moduleNames[moduleName]()) ? "✔" : "✘"
    }`
  );
});
