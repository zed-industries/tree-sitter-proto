const root = require("path").join(__dirname, "..", "..");

module.exports = require("node-gyp-build")(root);

try {
  const _nodeTypeInfo = require("../../src/node-types.json");
  module.exports.nodeTypeInfo = Array.isArray(_nodeTypeInfo)
    ? _nodeTypeInfo.filter((info) => info && info.type !== "syntax")
    : _nodeTypeInfo;
} catch (_) {}
