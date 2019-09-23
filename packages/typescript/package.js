Package.describe({
  name: "typescript",
  version: "3.6.2-rc182.3",
  summary: "Compiler plugin that compiles TypeScript and ECMAScript in .ts and .tsx files",
  documentation: "README.md"
});

Package.registerBuildPlugin({
  name: "compile-typescript",
  use: ["babel-compiler"],
  sources: ["plugin.js"]
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
  // The following api.imply calls should match those in
  // ../ecmascript/package.js.
  api.imply("modules");
  api.imply("ecmascript-runtime");
  api.imply("babel-runtime");
  api.imply("promise");
  // Runtime support for Meteor 1.5 dynamic import(...) syntax.
  api.imply("dynamic-import");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("es5-shim");
  api.use("typescript");
  api.mainModule("tests.ts");
});
