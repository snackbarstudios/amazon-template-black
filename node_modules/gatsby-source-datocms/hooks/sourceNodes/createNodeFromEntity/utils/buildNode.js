"use strict";

var updateDigest = require('./updateDigest');

module.exports = function (type, id, cb) {
  var node = {
    id: "".concat(type, "-").concat(id),
    parent: null,
    children: [],
    internal: {
      type: type
    }
  };
  cb(node);
  return updateDigest(node);
};