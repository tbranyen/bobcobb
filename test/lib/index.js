const assert = require("assert");
const path = require("path");
const pkg = require("../../package.json");

describe("Maestro", function() {
  afterEach(function() {
    delete require.cache[require.resolve(libpath + "index")];
  });

  it("exports the correct version", function() {
    var maestro = require(libpath + "index");

    assert.equal(maestro.VERSION, pkg.version);
  });

  it("exposes the API contract", function() {
    var maestro = require(libpath + "index");

    assert.ok(typeof maestro.startup === "function");
    assert.ok(typeof maestro.teardown === "function");
    assert.ok(typeof maestro.restart === "function");
  });
});
