"use strict";

var _DatoCmsAsset = _interopRequireDefault(require("./DatoCmsAsset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  [_DatoCmsAsset["default"]].forEach(function (fn) {
    return fn(context);
  });
};