const assert = require("assert");
const path = require("path");
const pkg = require("../../package.json");

describe("Bobcobb", function() {
  afterEach(function() {
    delete require.cache[require.resolve(libpath + "index")];
  });

  it("exports the correct version", function() {
    var bobcobb = require(libpath + "index");

    assert.equal(bobcobb.VERSION, pkg.version);
  });

  it("exposes the API contract", function() {
    var bobcobb = require(libpath + "index");

    assert.ok(typeof bobcobb.startup === "function");
    assert.ok(typeof bobcobb.teardown === "function");
    assert.ok(typeof bobcobb.restart === "function");
    assert.ok(Array.isArray(bobcobb.workers));
  });
});
