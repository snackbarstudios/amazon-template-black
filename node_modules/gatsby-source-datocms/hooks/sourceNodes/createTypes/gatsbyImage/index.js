"use strict";

var _DatoCmsFixed = _interopRequireDefault(require("./DatoCmsFixed"));

var _DatoCmsFluid = _interopRequireDefault(require("./DatoCmsFluid"));

var _DatoCmsImgixParams = _interopRequireDefault(require("./DatoCmsImgixParams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (context) {
  [_DatoCmsFixed["default"], _DatoCmsFluid["default"], _DatoCmsImgixParams["default"]].forEach(function (fn) {
    return fn(context);
  });
};