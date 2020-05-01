"use strict";

var _DatoCmsField = _interopRequireDefault(require("./DatoCmsField"));

var _DatoCmsModel = _interopRequireDefault(require("./DatoCmsModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  [_DatoCmsField["default"], _DatoCmsModel["default"]].forEach(function (fn) {
    return fn(context);
  });
};