const cluster = require("cluster");
const os = require("os");

var workers = [];

/**
 * restartWorker
 *
 * @return
 */
function restartWorker() {
  this.kill("SIGHUP");

  workers.splice(workers.indexOf(this), 1, createWorker());
}

/**
 * createWorker
 *
 * @return
 */
function createWorker() {
  var worker = cluster.fork();

  worker.on("exit", restartWorker.bind(worker));
  worker.on("error", restartWorker.bind(worker));

  return worker;
}

/**
 * startup
 *
 * @return
 */
exports.startup = function() {
  workers.push.apply(workers, os.cpus().map(createWorker));
};

/**
 * teardown
 *
 * @return
 */
exports.teardown = function() {
  workers.forEach(function(worker) {
    worker.kill("SIGHUP");
  });

  workers.length = 0;
};

/**
 * restart
 *
 * @return
 */
exports.restart = function() {
  exports.teardown();
  exports.startup();
};

/**
 * Export the package version.
 */
exports.VERSION = require('../package.json').version;
